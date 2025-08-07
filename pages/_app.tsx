import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import ReactBricksApp from '../components/ReactBricksApp'

import '../css/styles.css'
import '../css/aos_styles.css'
import 'aos/dist/aos.css'
import AosInit from '../components/aosInit'

const MyApp = (props: AppProps) => {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="color-mode"
      enableSystem={false}
      defaultTheme="light"
    >
      <AosInit />
      <ReactBricksApp {...props}></ReactBricksApp>
    </ThemeProvider>
  )
}

export default MyApp
