import Head from 'next/head'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Connect People and Business - without contact -" />
        <meta name="keywords" content="Keywords" />
        <title>Meishi corporation</title>

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/meishi.png" />
        <link rel="apple-touch-icon" href="/meishi.png" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
