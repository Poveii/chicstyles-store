import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FashionFusion',
  description: 'Uma loja de roupas para você que adora tendências.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
