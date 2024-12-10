import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastProvider } from "@/components/ui/use-toast"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sinergy Queens Dashboard',
  description: 'Management dashboard for Sinergy Queens restaurant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <a href="/" className="text-xl font-bold">Sinergy Queens</a>
              <div>
                <a href="/" className="mr-4">Dashboard</a>
                <a href="/admin/stock-update">Admin Stock Update</a>
              </div>
            </div>
          </nav>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}

