import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SwipeRank',
  description: 'The ultimate applicant ranking tool for clubs and organizations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
