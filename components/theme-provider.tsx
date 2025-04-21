'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Use suppressHydrationWarning to prevent the hydration mismatch error
  // This is needed because next-themes manipulates the DOM during hydration
  return (
    <NextThemesProvider {...props} enableSystem={false} enableColorScheme={false}>
      {children}
    </NextThemesProvider>
  )
}
