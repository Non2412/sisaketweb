import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'เสอเฉลมฉลองเนอง 243 ป',
  description: 'ระบบสงซอเสอเฉลมฉลองเนอง 243 ป',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-50">
        <Header />
        <main className="container-app py-6">
          {children}
        </main>
      </body>
    </html>
  )
}
