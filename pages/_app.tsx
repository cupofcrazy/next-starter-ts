import type { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
