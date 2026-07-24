import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const siteUrl = 'https://ektaavenue-phase3.example.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ekta Avenue Phase 3 | Premium Plots near Delhi–Dehradun Expressway',
    template: '%s | Ekta Avenue Phase 3',
  },
  description:
    'Ekta Avenue Phase 3 — a gated luxury plotted township minutes from the Delhi–Dehradun Expressway. RERA-ready residential plots with world-class amenities, wide boulevards, and assured appreciation. Book a site visit today.',
  keywords: [
    'Ekta Avenue Phase 3',
    'plots near Delhi Dehradun Expressway',
    'residential plots Dehradun',
    'luxury plotted township',
    'gated community plots',
    'real estate investment Uttarakhand',
  ],
  authors: [{ name: 'Ekta Avenue' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Ekta Avenue Phase 3 | Premium Plots near Delhi–Dehradun Expressway',
    description:
      'A gated luxury plotted township minutes from the Delhi–Dehradun Expressway. World-class amenities, wide boulevards, and assured appreciation.',
    siteName: 'Ekta Avenue Phase 3',
    images: [{ url: '/images/hero-aerial.png', width: 1200, height: 630, alt: 'Ekta Avenue Phase 3 aerial view' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ekta Avenue Phase 3 | Premium Plots near Delhi–Dehradun Expressway',
    description:
      'A gated luxury plotted township minutes from the Delhi–Dehradun Expressway.',
    images: ['/images/hero-aerial.png'],
  },
  robots: { index: true, follow: true },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
