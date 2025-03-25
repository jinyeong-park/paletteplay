"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type ThemeColors = {
  background: string
  text: string
  accent: string
  secondary: string
}

export type BrandTheme = {
  name: string
  colors: ThemeColors
}

export const themes: BrandTheme[] = [
  {
    name: "Dreamy",
    colors: {
      background: "#F0E6FF",
      text: "#4A4A6A",
      accent: "#B57EDC",
      secondary: "#D8BFD8",
    },
  },
  {
    name: "Airbnb",
    colors: {
      background: "#FFFFFF",
      text: "#222222",
      accent: "#FF385C",
      secondary: "#008489",
    },
  },
  {
    name: "Amazon",
    colors: {
      background: "#FFFFFF",
      text: "#0F1111",
      accent: "#FF9900",
      secondary: "#232F3E",
    },
  },
  {
    name: "Docker",
    colors: {
      background: "#2496ED",
      text: "#FFFFFF",
      accent: "#1D94C9",
      secondary: "#394D54",
    },
  },
  {
    name: "Stripe",
    colors: {
      background: "#FFFFFF",
      text: "#425466",
      accent: "#635BFF",
      secondary: "#E5E7EB",
    },
  },
  {
    name: "Notion",
    colors: {
      background: "#FFFFFF",
      text: "#37352F",
      accent: "#0070F3",
      secondary: "#F5F5F5",
    },
  },
  {
    name: "GitHub",
    colors: {
      background: "#FFFFFF",
      text: "#24292E",
      accent: "#0366D6",
      secondary: "#6A737D",
    },
  },
  {
    name: "Apple",
    colors: {
      background: "#FFFFFF",
      text: "#1D1D1F",
      accent: "#0071E3",
      secondary: "#86868B",
    },
  },
  {
    name: "Tech Minimalist",
    colors: {
      background: "#F4F7F9",
      text: "#1A1A2E",
      accent: "#16213E",
      secondary: "#0F3460",
    },
  },
  {
    name: "Finance",
    colors: {
      background: "#FFFFFF",
      text: "#2C3E50",
      accent: "#34495E",
      secondary: "#2980B9",
    },
  },
  {
    name: "Interior",
    colors: {
      background: "#F5F5F5",
      text: "#3E4444",
      accent: "#8C7B75",
      secondary: "#B8B8B8",
    },
  },
  {
    name: "Creative Arts",
    colors: {
      background: "#FAFAFA",
      text: "#2C3E50",
      accent: "#E74C3C",
      secondary: "#3498DB",
    },
  },
  {
    name: "Wellness",
    colors: {
      background: "#E8F5E9",
      text: "#2E7D32",
      accent: "#4CAF50",
      secondary: "#81C784",
    },
  },
  {
    name: "Luxury",
    colors: {
      background: "#F5F5F5",
      text: "#333333",
      accent: "#D4AF37",
      secondary: "#8B7355",
    },
  },
  {
    name: "Startup",
    colors: {
      background: "#FFFFFF",
      text: "#2C3E50",
      accent: "#E74C3C",
      secondary: "#3498DB",
    },
  },
]

type BrandThemeContextType = {
  selectedTheme: BrandTheme
  setSelectedTheme: (theme: BrandTheme) => void
}

const BrandThemeContext = createContext<BrandThemeContextType | undefined>(undefined)

export function BrandThemeProvider({ children }: { children: ReactNode }) {
  // Set Dreamy as the default theme (index 0 in the updated themes array)
  const [selectedTheme, setSelectedTheme] = useState<BrandTheme>(themes[0])

  return <BrandThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>{children}</BrandThemeContext.Provider>
}

export function useBrandTheme() {
  const context = useContext(BrandThemeContext)
  if (context === undefined) {
    throw new Error("useBrandTheme must be used within a BrandThemeProvider")
  }
  return context
}

