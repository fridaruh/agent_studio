'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { es } from './es'
import { en } from './en'
import type { Translations } from './es'

type Locale = 'es' | 'en'

interface I18nContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

const translations: Record<Locale, Translations> = { es, en }

const I18nContext = createContext<I18nContextType>({
  locale: 'en',
  t: en,
  setLocale: () => {},
})

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  const setLocale = useCallback((l: Locale) => setLocaleState(l), [])

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
