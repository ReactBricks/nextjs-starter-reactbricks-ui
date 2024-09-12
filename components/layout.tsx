import React, { ReactNode } from 'react'

import { Nunito_Sans } from 'next/font/google'

interface LayoutProps {
  children?: ReactNode
}

const nunito = Nunito_Sans({
  adjustFontFallback: false,
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-nunito',
})

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`flex flex-col h-screen justify-between ${nunito.variable} font-sans antialiased`}
    >
      <main className="mb-auto dark:bg-gray-900">{children}</main>
    </div>
  )
}

export default Layout
