import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../public/SCSS/style.scss'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
