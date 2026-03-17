import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const THEME_STORAGE_KEY = 'theme'

const ThemeContext = createContext(null)

function getPreferredTheme() {
  if (typeof window === 'undefined') return 'dark'

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored

  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getPreferredTheme)

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    const mql = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!mql) return

    const onChange = () => {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
      if (stored === 'light' || stored === 'dark') return
      setTheme(mql.matches ? 'dark' : 'light')
    }

    mql.addEventListener?.('change', onChange)
    return () => mql.removeEventListener?.('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

