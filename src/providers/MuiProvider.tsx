"use client"

import { ThemeProvider } from "@mui/material"

import theme from "@/assets/theme"

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
