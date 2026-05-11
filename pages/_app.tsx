import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { QueryClientProvider, QueryClient } from 'react-query'
import NextProgress from "next-progress"

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NextProgress delay={300} options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
