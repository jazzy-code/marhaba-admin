import { ClerkProvider } from "@clerk/nextjs"
import { type Metadata } from "next"
import { Manrope, Playfair_Display } from "next/font/google"
import "./globals.css"

import MuiProvider from "@/providers/MuiProvider"
import QueryProvider from "@/providers/QueryProvider"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Marhaba Admin",
  description: "The Admin Panel for Marhaba"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="light">
        <body className={`${playfairDisplay.variable} ${manrope.variable} antialiased`}>
          <QueryProvider>
            <MuiProvider>{children}</MuiProvider>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
