import { FC, useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import '@/styles/globals.scss'
import * as gtag from '../components/helpers/googleAnalytics/gtag'
import { useRouter } from 'next/router'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, viewport-fit=cover, shrink-to-fit=no"
        />
        <title>Tim Front-end Developer</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
