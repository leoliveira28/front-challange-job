import { GlobalStyle } from '../../styles/globals'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
const theme = {
  colors: {
    primary: '#0070f3',
  },
}
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
    </ThemeProvider>
    </>

  )
  
}

export default MyApp
