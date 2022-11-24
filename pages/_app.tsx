import { FC } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import '@/styles/globals.scss'
import ReactGA from 'react-ga'

if (process.browser) {
  const TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID!
  ReactGA.initialize(TRACKING_ID)
  ReactGA.pageview(window.location.pathname + window.location.search)
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='height=device-height, width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, viewport-fit=cover, shrink-to-fit=no'
        />
        <link rel='shortcut icon' type='image/ico' href='/favicon.ico' />
        {[400, 500, 600, 700].map((weight) => (
          <link
            key={weight}
            href={`/font/anek-gurmukhi-v2-latin-${weight}.woff2`}
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
        ))}
        <title>Tim Front-end Developer</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
