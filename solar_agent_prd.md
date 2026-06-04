# Product Requirements Document
## AI Agent Platform for Solar Panel Companies
### Adapted from: usehandle.ai structure

**Version:** 2.0  
**Date:** June 2026  
**Status:** Draft — Solar vertical adaptation

---

## 1. Product Overview

### 1.1 What the Product Is

A vertical AI agent platform built specifically for solar panel companies (installers, distributors, and EPC firms). It automates the three highest-friction workflows in solar sales and operations: customer quoting, client follow-up, and post-sale service tracking.

The core technology is **AI agents** that handle inbound inquiries, generate technical quotes, coordinate with internal teams, and follow up with prospects — across WhatsApp, email, and phone — without adding headcount.

### 1.2 The Problem Being Solved

A mid-size solar company handles 50–200 inbound leads per month. Each requires a site visit, a technical assessment, a custom quote, and persistent follow-up before closing. Current reality:

- Quotes take 3–7 days because an engineer must review each request manually
- 60–70% of leads go cold due to slow or inconsistent follow-up
- Customer service requests pile up across WhatsApp, email, and phone — no single view
- Post-installation follow-up and maintenance scheduling is handled manually, case by case
- Sales teams spend more time on admin than on closing

The core insight: **solar company growth is linear with headcount** because every new lead means more manual coordination, and every closed deal creates a service relationship that requires ongoing attention.

---

## 2. Site Architecture

### 2.1 Pages

| Page | URL pattern | Purpose |
|---|---|---|
| Homepage | / | Main marketing/conversion page |
| Jobs | /jobs | Careers listings |
| Agents | /agents | Detailed agent product page |
| Terms | /terms | Legal |
| Success Stories | /success-stories/[client] | Case study per client |
| Blog | /blog | Content hub |
| Account activation | /activar | Customer onboarding |
| Demo request | separate subdomain or modal | External lead capture |

### 2.2 Language Routing

Primary locale: Spanish (ES). Support for EN and PT via top-nav toggle.

---

## 3. Homepage Structure (Section by Section)

### 3.1 Navigation Bar

**Left:** Logo + wordmark  
**Center links:** Platform, Agents, Security, FAQ, Careers  
**Right:** Language toggle (EN/ES/PT) + "Contact us" CTA + "Activate my account" CTA

CTAs:
- "Contact us" → demo request form or subdomain
- "Activate my account" → /activar

### 3.2 Trust Badge (Above the Hero)

Small pill/badge signaling credibility: investor name, industry award, or media mention. Example: `Backed by [Investor] — as seen in [Press]`

### 3.3 Hero Section

**Headline:** "Your solar company, closing more — without adding more people."

**Subheadline:** "The AI agent platform purpose-built for solar installers and distributors. Automates quoting, client follow-up, and service coordination — end to end, across every channel."

**CTAs:** "Contact us" + "Activate my account"

**Hero visual:** Full-width dashboard image showing a unified inbox with inbound leads, quote statuses, and follow-up threads in one view

**Client logo strip (scrolling marquee):** 6 solar company client logos — repeating loop

### 3.4 Press / As Seen In Strip

Logos/links to relevant media: industry publications, tech press, local business media covering solar or cleantech.

### 3.5 Problem Section — "Current Reality"

**Headline:** "Solar sales and service still run on WhatsApp threads, scattered spreadsheets, and manual follow-up."

**Narrative paragraph:** A mid-size solar company receives 80 leads this month. Each needs a site evaluation, a custom quote (panels, inverter, financing options, ROI projection), and 3–5 follow-up touches before the client decides. The sales team is overwhelmed. Half the leads get a response after 48 hours. A third never get a second follow-up. The deals that close do so despite the process, not because of it.

**4 pain point cards:**

| Pain Point | Description |
|---|---|
| Slow quotes lose installs | Custom quotes take days. By the time you respond, the client already signed with a competitor who answered in hours. |
| Leads go cold with no follow-up | After the first contact, most leads get 1 or 2 touches. Automated, consistent follow-up is impossible without a dedicated person. |
| No single view of the client | Conversations scattered across WhatsApp, email, and calls. No one knows the full history of a lead or customer relationship. |
| Post-sale bottleneck | Maintenance requests, warranty claims, and monitoring alerts arrive without structure. The same person handling sales handles service complaints. |

### 3.6 Impact Metrics Section — "What changes when the agents start working"

Animated scroll-triggered counters:

| Metric | Suggested value (adapt to real data) |
|---|---|
| Of inbound leads responded to in under 5 minutes | 100% |
| Increase in quote-to-close conversion rate | +35% |
| Hours returned to each sales rep per week | +10 hrs |
| Reduction in time from lead to delivered quote | 80% |

Note: Counters animate from 0 on scroll entry. Use JavaScript IntersectionObserver.

### 3.7 Platform Preview — "Welcome to the future of solar operations"

Two interactive showcase panels with toggle:

**Panel 1 — Centralize every lead and client**
- "All your inbound channels — WhatsApp, web form, email — flow into a single real-time dashboard. Every lead is captured, classified, and assigned automatically."
- Visual: Unified inbox UI showing lead cards by stage

**Panel 2 — Interact with your pipeline**
- "Ask about any lead, quote, or installation status through an AI trained on your operation. No manual searching across tools."
- Visual: Agent chat interface answering pipeline questions

**Audio demo:** Spanish voice demo showing an agent handling an inbound WhatsApp inquiry end to end

**Interactive CTA:** "Try our Quoting Agent" (embedded demo widget)

### 3.8 Platform Architecture — "Two layers that build on each other"

Two-column layout, numbered:

**Layer 01 — System of Record (SOR)**  
Label: "Control tower for leadership"  
Description: The central database for your operation. Connects to every channel and system your company already uses — no manual integrations, no depending on a CRM someone forgot to update.

Integration logos shown (two rows):
- Channels: WhatsApp, Email, Phone/Calls, Web Form, CRM, Excel/Sheets
- Systems: Salesforce, HubSpot, Google Sheets, SAP, NetSuite, Odoo, + more

**Layer 02 — Vertical Agents**  
Label: "Autonomous execution layer"  
Description: AI agents that execute complete workflows end to end. They operate like full-time team members — qualifying leads, generating quotes, following up, coordinating service — with 99% accuracy.

Agent list: Quoting Agent, Follow-up Agent, Service Agent, Customer Success Agent, + Custom Agents

### 3.9 Key Differentiator Section — "AI that works the way your team works"

**Headline:** "Our agents don't just send notifications — they execute complete workflows, across every channel, without human intervention."

**Supporting paragraph:** Solar sales is relationship-driven, multi-touch, and technically complex. Our agents understand that. They read inbound messages, extract the right data, generate personalized quotes, follow up at the right moment, and escalate to your team only when a human decision is needed.

**4 feature cards:**

| Feature | Detail |
|---|---|
| Responds instantly, 24/7 | Inbound WhatsApp or email at 9pm? The agent responds with qualification questions and next steps within seconds. |
| Executes workflows end to end | From receiving a lead to delivering a complete quote with ROI projections — zero manual steps in between. |
| Escalates when it needs your judgment | The agent knows its limits. It notifies your team in real time when a client needs a human conversation. |
| Full activity logging | Every interaction recorded. You know exactly what the agent said, when, and what the client replied. |

**Visual:** Architecture diagram showing agent loop across channels

### 3.10 Agent 01 — Quoting Agent

**Full name:** Quoting Agent

**What it handles:** Inbound requests for solar installation quotes — residential, commercial, industrial. Handles data collection, technical sizing, supplier pricing lookup, and ROI calculation automatically.

**Input channels:** WhatsApp, email, web form

**Workflow:** Receives request → asks qualifying questions (consumption, roof type, location, financing preference) → generates technical proposal (system size, panels, inverter, estimated output, ROI, payback period) → delivers comparison of 2–3 system options.

**Time reduction:** 3–7 business days → under 4 hours

**Before/After comparison (two columns):**

| Manual Today | With AI Agent |
|---|---|
| Lead arrives via WhatsApp and sits in queue | Agent responds within 60 seconds with qualification questions |
| Engineer reviews manually and schedules a call | Agent extracts all technical data automatically from conversation |
| Quote built in Excel, sent 3–7 days later | Quote generated from templates with real pricing and ROI projections |
| Client gets one generic PDF | Client receives personalized comparison of 2–3 system options |
| Team follows up if they remember | Agent follows up automatically at 24h, 48h, and 7-day intervals |

**Animated workflow stepper (6 steps):**
1. Lead capture — receives request via WhatsApp or email automatically
2. Qualification — asks structured questions to extract technical requirements
3. Technical sizing — calculates system size based on consumption and location
4. Pricing lookup — pulls current panel, inverter, and BOS pricing
5. Quote generation — builds personalized proposal with ROI and payback period
6. Client delivery — sends quote summary with recommended options and next steps

**Visual:** Agent quote flow diagram

### 3.11 Agent 02 — Follow-up Agent

**Full name:** Follow-up Agent

**What it handles:** Systematic, personalized follow-up with every prospect in the pipeline. Navigates CRM and conversation history to send the right message at the right moment. Zero leads fall through the cracks.

**Promise:** Every lead gets at least 5 follow-up touches. Automatically. Without a single manual reminder.

**Animated workflow stepper (6 steps):**
1. Pipeline scan — identifies leads with no activity in defined window
2. Context retrieval — reads conversation history and quote status
3. Message personalization — crafts follow-up based on lead profile and stage
4. Message delivery — sends via WhatsApp or email, matching client's preferred channel
5. Response capture — logs reply and updates CRM automatically
6. Escalation trigger — flags hot leads for immediate human follow-up

**Visual:** Follow-up flow diagram with channel icons

### 3.12 More Agents — "The platform grows with you"

Three cards:

| Agent | Status | Description |
|---|---|---|
| Service Agent | Beta | Handles post-installation requests: maintenance scheduling, monitoring alerts, warranty claims, and technical support tickets — automatically triaged and routed. |
| Customer Success Agent | Beta | Manages the ongoing client relationship: annual performance reviews, upsell opportunities (battery storage, expansion), referral requests. |
| Custom Agents | Enterprise | Workflow unique to your operation? We build custom agents tailored to your business and integrated with your existing systems. |

**CTAs:** "Contact us" + "Activate my account"

### 3.13 Video Demo Section

**Headline:** "See the agents in action"

**Subheadline:** "Watch how the platform handles quoting, follow-up, and service coordination — end to end, in real time."

**Embedded video:** Product demo video (YouTube embed or hosted MP4)

### 3.14 Case Study Section

**Client:** [Solar company name]  
**Result:** [X hours of manual follow-up eliminated / Y% increase in close rate] in [N weeks]  
**CTA:** "View full case study" → /success-stories/[client]  
**Visual:** Case study hero image

### 3.15 Security Section — "Your data, protected by design"

**Context setter:** "Solar companies manage sensitive client information — addresses, energy bills, financing data. Every layer of our infrastructure is designed to keep it safe."

**4 security pillars (numbered):**

| # | Feature | Detail |
|---|---|---|
| 01 | End-to-end encryption | All data in transit and at rest encrypted with AES-256 and TLS 1.3. No plain-text storage, ever. |
| 02 | RAG on Demand | Your client data and documents are retrieved only when needed — never stored in shared model memory or exposed to other tenants. |
| 03 | API abuse protection | Rate limiting, anomaly detection, and automatic token rotation prevent unauthorized access. |
| 04 | Tenant isolation | Every company runs in a fully isolated environment. Your data is never co-mingled with another client's. |

**Visual:** Security architecture diagram

### 3.16 Use Cases — "AI agents that work across every type of solar project"

**Intro:** "From a rooftop residential install to a commercial park — the agent adapts to the profile and runs the right process."

**12 use case cards (carousel or grid):**

| Project Type | Time / Channel |
|---|---|
| Residential rooftop | Lead to quote in under 4 hours, via WhatsApp |
| Commercial SME | Multi-option proposal in one business day, via email |
| Industrial / large-scale | Technical pre-assessment with supplier outreach, 48h turnaround |
| Government / municipal | Formal proposal with ROI report and regulatory notes |
| Agricultural (agrivoltaic) | Specialized sizing for dual land use, via field engineer integration |
| Off-grid / rural | Remote location assessment, quote with battery storage options |
| EPC projects | Multi-phase project breakdown with milestone-based follow-up |
| Hybrid systems (solar + battery) | Comparative quote across storage configurations |
| Financing-led leads | Agent qualifies credit profile and routes to financing partner |
| Lease / PPA model | Contract-type selection and terms explained automatically |
| Maintenance service request | Ticket opened, triaged, and scheduled within the hour |
| Warranty / claims | Auto-documented and escalated to the right internal team |

### 3.17 Integrations Section — "Works with what you already use"

**Tagline:** "No migrations. No stack changes. Just plug in."

**Solar-specific integrations (first row):** Logos for solar design tools and supplier portals — Aurora Solar, Helioscope, PVSyst, SAP, Odoo, or equivalent.

**Tools and systems:**

| Category | Tool |
|---|---|
| CRM | Salesforce, HubSpot, Microsoft Dynamics, Pipedrive |
| Email | Gmail, Outlook |
| Messaging | WhatsApp Business API |
| Project management | Monday.com, Asana, Jira |
| Solar design | Aurora Solar, Helioscope |
| Supplier portals | Any portal with login access |
| Data import | Excel / CSV |
| Enterprise systems | SAP, NetSuite, Odoo, ERPs |

**Bottom CTA:** "Using a different tool? Let's talk — we integrate with it."

### 3.18 FAQ Section

10 questions in accordion format:

| Question | Answer summary |
|---|---|
| How long does implementation take? | Most companies are fully live within 5–7 business days. No IT team required on your side. |
| Does this replace my sales team? | No. The agents take over repetitive, manual tasks so your team can focus on closing and building relationships. |
| What channels does the agent work on? | WhatsApp, email, and web forms natively. Phone integration available on request. |
| How accurate are the quotes the agent generates? | 99% accuracy on technical sizing and pricing, with human-in-the-loop checkpoints your team controls before delivery. |
| Can it handle leads in different states or regions? | Yes. The agent adapts to local utility rates, solar irradiance data, and regional incentives. |
| What ROI can I expect? | Companies typically see 5–8x ROI within the first 90 days, driven by faster quotes and systematic follow-up recovering leads that would otherwise go cold. |
| Is my client data secure? | Yes. Enterprise-grade security purpose-built for companies handling sensitive client information. Encrypted at rest and in transit. |
| Can the agent learn our pricing and product catalog? | Yes. We train the agent on your specific product lines, pricing tiers, and business rules before going live. |
| Does it work with our current CRM? | Yes. We integrate with Salesforce, HubSpot, Dynamics, Pipedrive, and most others. If you use it, we can connect it. |
| Can I customize the agent's tone and messaging? | Yes. The agent speaks in your company's voice, with your branding, and follows your communication guidelines. |

### 3.19 CTA Section

**Background:** High-contrast image (rooftop solar installation or team at work)  
**Headline:** "Ready to stop losing leads to slow follow-up? Start today."  
**CTAs:** "Contact us" + "Activate my account"

### 3.20 Footer

**Logo + tagline:** "AI agents for solar sales and operations."

**Column 1 — Product:** Platform, Agents, Security, Integrations  
**Column 2 — Company:** Why us, ROI, FAQ, Careers  
**Column 3 — Resources:** Blog, Success Stories  
**Column 4 — Contact:** Get in touch

**Social links:** Instagram, X/Twitter, LinkedIn

**Legal:** © 2026 [Product name]. All rights reserved.

---

## 4. Metrics and KPIs for the Site

These are the proof points to feature in the site — adapt values to real client data:

| Metric | Suggested placeholder |
|---|---|
| Lead response time | Under 5 minutes, 24/7 |
| Increase in quote-to-close conversion | +35% |
| Reduction in time from lead to quote | 80% (e.g., 5 days → 4 hours) |
| Hours saved per sales rep per week | 10+ hours |
| Lead follow-up coverage | 100% of leads receive at least 5 touches |
| Agent task accuracy | 99% |
| Typical ROI | 5–8x in first 90 days |
| Implementation time | 5–7 business days |
| Leads recovered from cold pipeline | Metric from first case study |

---

## 5. Tech Stack (Carry-over from Handle)

| Layer | Tech |
|---|---|
| Frontend | React + TypeScript |
| Styling | Modern CSS (Grid, Flexbox, animations) |
| State/data | Real-time dashboards (WebSocket or polling) |
| Accessibility | WCAG 2.1 |
| Analytics | Facebook Pixel + Google Analytics |
| Backend agents | Python |
| Integrations | REST APIs, WhatsApp Business API, third-party connectors |
| Infra | Cloud-hosted (provider TBD) |
| AI core | LLM-based agent loop, RAG for client data retrieval |

---

## 6. Business Model Signals

- SaaS subscription (implied by "Activate my account" flow)
- Enterprise tier for custom agents
- Demo-first motion as top-of-funnel
- Likely per-seat or per-agent pricing (not publicly listed)
- Target segment: solar installers and distributors managing 30+ leads/month

---

## 7. Content and Tone Guidelines

- Tone: Direct, operator-grade — speaks to the sales director or operations manager, not IT
- Persona: A solar company owner or commercial director who is growing fast and losing deals to slow processes
- Framing: "We don't replace your team. We give them superpowers."
- Social proof anchors: client logos, case study results, press mentions, investor credibility
- Urgency mechanism: "By the time your team responds, the client already signed with the competitor who answered in two hours."
- Trust mechanism: 99% accuracy, real case study with numbers, tenant isolation, data encryption

---

## 8. Key Assets to Produce

| Asset | Notes |
|---|---|
| Hero dashboard image | Shows unified lead inbox + agent activity in real time |
| Showcase panel 1 | Unified channel view (WhatsApp + email + web form) |
| Showcase panel 2 | AI chat answering pipeline questions |
| Quoting agent flow diagram | 6-step animated process |
| Follow-up agent flow diagram | 6-step animated process |
| Computer Use / agent architecture diagram | Shows agent operating across channels |
| Security architecture diagram | Shows encryption, isolation, RAG layers |
| CTA background image | Solar installation or operations context |
| Case study hero image | Per client |
| Audio demo (Spanish) | Agent handling inbound WhatsApp inquiry end to end |
| OG image | 1200x630, product screenshot with tagline |
| Client logos | 6 minimum for marquee strip |

---

## 9. Sections Needing Custom Development

1. **Animated stat counters** — scroll-triggered count-up on the Impact section
2. **Workflow stepper** — animated 6-step cycle for each agent (Pending → active → complete states)
3. **Client logo marquee** — infinite scrolling strip, repeated set
4. **Interactive Quoting Agent demo** — embedded widget, Spanish/English toggle, WhatsApp simulation
5. **Use cases carousel** — 12 cards in auto-scrolling loop
6. **Accordion FAQ** — expand/collapse per question
7. **Showcase panel switcher** — toggle between "Centralize leads" and "Interact with pipeline" panels
8. **Language switcher** — EN/ES/PT toggle with locale-specific content
9. **Video/audio demo** — with custom cover and play state

---

## 10. Replication Scope Recommendation

| Priority | Section | Complexity |
|---|---|---|
| P0 | Hero + Nav + CTAs | Low |
| P0 | Problem statement + pain cards | Low |
| P0 | Platform architecture (2 layers) | Medium |
| P0 | Agent 01 (Quoting) and Agent 02 (Follow-up) detail sections | Medium |
| P1 | Key differentiator section | Low |
| P1 | Use cases grid | Low |
| P1 | Security section | Low |
| P1 | FAQ accordion | Medium |
| P1 | Integrations logos | Low |
| P2 | Impact metrics with animated counters | High |
| P2 | Workflow steppers (animated) | High |
| P2 | Marquee logo strip | Medium |
| P2 | Video/audio demo embed | Low |
| P3 | Case study section | Low |
| P3 | Press strip | Low |
| P3 | Multi-language routing | High |
