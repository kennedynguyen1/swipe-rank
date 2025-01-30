import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="--background text-foreground">{children}</body>
    </html>
  );
}
