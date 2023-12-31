import './globals.scss'
import type { Metadata } from 'next'
import NavbarComponents from '~/components/Navbar'
import { Inter } from 'next/font/google'
import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'
import NavigationMenuMobile from '~/components/NavigationMenuMobile'

const inter = Inter({ subsets: ['latin'] })
import '~/scss/main.scss'

export const metadata: Metadata = {
  title: 'Bich Tram Beauty Spa',
  description: 'Generated by Bich Tram Beauty Spa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{height: '100vh'}} className={inter.className}>
        <main className="flex min-h-screen flex-col items-center">
          <Header />
          <NavbarComponents />
          {children}
          <Footer/>
          <NavigationMenuMobile/>
        </main>
      </body>
    </html>
  )
}