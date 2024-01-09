import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './ui/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'MarvelWeb',
    default: 'Marvel Gate',
  },
  description: 'Web App about the world of Marvel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
