import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ACHLYS | The Ouroboros Language',
  description: 'A self-hosting, Latin-based programming language forged for security, speed, and elegance.',
  keywords: ['programming', 'language', 'latin', 'hacking', 'security', 'compiler'],
  openGraph: {
    title: 'ACHLYS',
    description: 'From the Void, we code.',
    url: 'https://achlys-lang.com',
    siteName: 'Achlys',
    images: [
      {
        url: '/og-image.png', // You can add this later
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Added suppressHydrationWarning to ignore browser extension injections */}
      <body 
        className={`${inter.className} bg-void text-white antialiased selection:bg-blood selection:text-white`}
        suppressHydrationWarning
      >
        <Navigation />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}