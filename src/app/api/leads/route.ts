import { NextResponse } from 'next/server'
import { finalizeEvent } from 'nostr-tools/pure'
import { Relay } from 'nostr-tools/relay'
import { decode } from 'nostr-tools/nip19'
import { parseLead, formatLead } from '@/lib/leads'

// The relay is reached over a websocket, which the edge runtime can't open.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Buzz channel message. Same kind the CLI sends. */
const KIND_CHANNEL_MESSAGE = 9

const PUBLISH_TIMEOUT_MS = 8000

/** How long to wait for the relay's NIP-42 challenge before giving up on it. */
const CHALLENGE_TIMEOUT_MS = 3000

function secretKeyBytes(raw: string): Uint8Array {
  if (raw.startsWith('nsec')) {
    const { type, data } = decode(raw)
    if (type !== 'nsec') throw new Error('BUZZ_LEADS_PRIVATE_KEY is not an nsec')
    return data as Uint8Array
  }
  if (!/^[0-9a-f]{64}$/i.test(raw)) {
    throw new Error('BUZZ_LEADS_PRIVATE_KEY must be an nsec or 64 hex chars')
  }
  return Uint8Array.from(raw.match(/../g)!.map((h) => parseInt(h, 16)))
}

async function publishToBuzz(content: string) {
  const relayUrl = process.env.BUZZ_RELAY_URL
  const channelId = process.env.BUZZ_LEADS_CHANNEL_ID
  const privateKey = process.env.BUZZ_LEADS_PRIVATE_KEY

  if (!relayUrl || !channelId || !privateKey) {
    throw new Error(
      'Missing BUZZ_RELAY_URL, BUZZ_LEADS_CHANNEL_ID or BUZZ_LEADS_PRIVATE_KEY'
    )
  }

  const secret = secretKeyBytes(privateKey)

  // Delegation tag proving this key posts on the owner's behalf. The relay treats
  // the bare key as a non-member, so it has to ride on both the AUTH event and the
  // message itself — without it the relay answers "restricted: not a relay member".
  const authTag = process.env.BUZZ_LEADS_AUTH_TAG
    ? (JSON.parse(process.env.BUZZ_LEADS_AUTH_TAG) as string[])
    : null

  const tags: string[][] = [['h', channelId]]
  if (authTag) tags.push(authTag)

  const event = finalizeEvent(
    {
      kind: KIND_CHANNEL_MESSAGE,
      created_at: Math.floor(Date.now() / 1000),
      tags,
      content,
    },
    secret
  )

  // Built by hand rather than with Relay.connect() so `onauth` is never set: that
  // path auto-answers the challenge and rethrows inside a catch handler, which
  // surfaces as an unhandled rejection and takes the whole function down.
  const relay = new Relay(relayUrl)
  await relay.connect()
  try {
    const challenge = await waitForChallenge(relay)
    if (challenge) {
      await withTimeout(
        relay.auth(async (evt) =>
          finalizeEvent(
            { ...evt, tags: authTag ? [...evt.tags, authTag] : evt.tags },
            secret
          )
        ),
        PUBLISH_TIMEOUT_MS
      )
    }
    await withTimeout(relay.publish(event), PUBLISH_TIMEOUT_MS)
  } finally {
    relay.close()
  }
  return event.id
}

/**
 * Resolves once the relay has sent its NIP-42 challenge, or false if it never does
 * (an open relay that doesn't require AUTH — publishing straight away is correct there).
 * `challenge` is private to nostr-tools but is the only signal that AUTH is expected.
 */
async function waitForChallenge(relay: Relay): Promise<boolean> {
  const deadline = Date.now() + CHALLENGE_TIMEOUT_MS
  while (Date.now() < deadline) {
    if ((relay as unknown as { challenge?: string }).challenge) return true
    await new Promise((r) => setTimeout(r, 50))
  }
  return false
}

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    p,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`relay publish timed out after ${ms}ms`)), ms)
    ),
  ])
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid JSON body' }, { status: 400 })
  }

  const parsed = parseLead(body)
  if ('errors' in parsed) {
    return NextResponse.json({ error: parsed.errors.join('; ') }, { status: 400 })
  }

  try {
    const eventId = await publishToBuzz(formatLead(parsed.lead, new Date()))
    return NextResponse.json({ ok: true, eventId })
  } catch (err) {
    // Log the whole lead so a relay outage degrades to "it's in the function logs"
    // rather than "it's gone". The form surfaces the failure so the visitor can retry.
    console.error('[leads] delivery failed', {
      error: err instanceof Error ? err.message : String(err),
      lead: parsed.lead,
    })
    return NextResponse.json({ error: 'could not deliver the lead' }, { status: 502 })
  }
}
