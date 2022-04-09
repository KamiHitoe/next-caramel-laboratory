import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { createTheme } from '@mui/material/styles';
import { amber, pink } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: amber[800],
    },
    secondary: {
      main: amber[200],
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
