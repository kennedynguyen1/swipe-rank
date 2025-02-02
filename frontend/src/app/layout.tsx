import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "SwipeRank - Simplify Your Applicant Ranking Process",
  description: "SwipeRank helps clubs and organizations efficiently review and rank applicants with an intuitive, swipe-based interface.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
