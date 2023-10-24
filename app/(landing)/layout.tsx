import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import { NextAuthProvider } from '@/components/Others/Providers'
const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Jalias',
  description: 'Notion Clone',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg"
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("h-screen w-full dark:text-white dark:bg-[#1f1f1f]", inter.className)}>
      <NextAuthProvider>
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey='themejo1'>
          <div className={cn('min-w-screen h-full max-sm:h-auto grid grid-rows-[100px_1fr_100px]')}>
              <Navbar/>
              {children}
              <Footer/>
          </div>
        </ThemeProvider>
      </NextAuthProvider>
      </body>
    </html>
  )
}
