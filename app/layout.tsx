import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blossoms - Beautiful Flower Bouquets",
  description:
    "Wrapped in Beauty Sent with Love. Shop our exquisite collection of flower bouquets and floral arrangements.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo blossoms.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo blossoms.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo blossoms.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo blossoms.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
