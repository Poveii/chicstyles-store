import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChicStyles',
  description:
    'Uma boutique de moda online para você que busca produtos de alta qualidade e estilo.',
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
