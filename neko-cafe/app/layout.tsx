import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

// 預覽圖需要完整網址：優先用 NEXT_PUBLIC_SITE_URL，沒有就用 Vercel 自動提供的正式網址。
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

const title = '貓尾草｜FF14 貓咪互動空間'
const description = '在艾歐澤亞，和一群有自己步調的貓咪相遇。貓尾草，一間讓你自在親近貓咪的店。'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'zh_TW',
    siteName: '貓尾草',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '貓尾草｜FF14 貓咪互動空間' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
}

// 網站只有一套淺色配色：鎖定淺色（捲軸、表單元件不會跟著系統深色模式變黑），
// 手機網址列顏色跟首頁頂部的紫色一致。
export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5a4b63',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hant" className="light">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
