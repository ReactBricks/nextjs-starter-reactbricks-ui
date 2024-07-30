import { useTheme } from 'next-themes'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from 'next/font/google'
import { useEffect, useState } from 'react'
import { ReactBricks } from 'react-bricks/frontend'

import config from '../react-bricks/config'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-nunito',
})

const ReactBricksApp = ({ Component, pageProps }: AppProps) => {
  // Color Mode Management
  const savedColorMode =
    typeof window === 'undefined' ? '' : localStorage.getItem('color-mode')

  const [colorMode, setColorMode] = useState(savedColorMode || 'light')

  const { setTheme } = useTheme()

  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newColorMode)
    localStorage.setItem('color-mode', newColorMode)
    setTheme(newColorMode)
  }

  const reactBricksConfig = {
    ...config,
    isDarkColorMode: colorMode === 'dark',
    toggleColorMode,
    contentClassName: `antialiased font-content ${nunito.className} ${colorMode} ${
      colorMode === 'dark' ? 'dark bg-gray-900' : 'light bg-white'
    }`,
  }

  return (
    <ReactBricks {...reactBricksConfig}>
      <Component {...pageProps} />
    </ReactBricks>
  )
}

export default ReactBricksApp
