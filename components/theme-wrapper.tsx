"use client"

import { type ReactNode, useEffect } from "react"
import { useBrandTheme } from "./theme-context"

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const { selectedTheme } = useBrandTheme()

  // Convert hex to RGB for shadow effects
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? `${Number.parseInt(result[1], 16)}, ${Number.parseInt(result[2], 16)}, ${Number.parseInt(result[3], 16)}`
      : "0, 0, 0"
  }

  // Update document title and CSS variables when theme changes
  useEffect(() => {
    document.title = `PalettePlay - ${selectedTheme.name} Theme`

    // Update CSS variables at the document root level
    const root = document.documentElement
    // Always use white as background
    root.style.setProperty("--theme-background", "#FFFFFF")
    root.style.setProperty("--theme-text", selectedTheme.colors.text)
    root.style.setProperty("--theme-accent", selectedTheme.colors.accent)
    root.style.setProperty("--theme-accent-rgb", hexToRgb(selectedTheme.colors.accent))
    root.style.setProperty("--theme-secondary", selectedTheme.colors.secondary)

    // Update shadcn UI theme variables to match the selected theme
    root.style.setProperty("--primary", selectedTheme.colors.accent)
    root.style.setProperty("--primary-foreground", "#ffffff")

    root.style.setProperty("--secondary", selectedTheme.colors.secondary)
    root.style.setProperty("--secondary-foreground", selectedTheme.colors.text)

    root.style.setProperty("--muted", selectedTheme.colors.secondary)
    root.style.setProperty("--muted-foreground", selectedTheme.colors.text + "99") // Add transparency

    root.style.setProperty("--accent", selectedTheme.colors.accent + "20") // Lighter version
    root.style.setProperty("--accent-foreground", selectedTheme.colors.text)

    root.style.setProperty("--border", selectedTheme.colors.secondary)
    root.style.setProperty("--input", selectedTheme.colors.secondary)
    root.style.setProperty("--ring", selectedTheme.colors.accent)

    // Update background and foreground
    root.style.setProperty("--background", "#FFFFFF")
    root.style.setProperty("--foreground", selectedTheme.colors.text)

    // Update card styles
    root.style.setProperty("--card", "#FFFFFF")
    root.style.setProperty("--card-foreground", selectedTheme.colors.text)

    // Update popover styles
    root.style.setProperty("--popover", "#FFFFFF")
    root.style.setProperty("--popover-foreground", selectedTheme.colors.text)
  }, [selectedTheme])

  return <div className="theme-container min-h-screen">{children}</div>
}

