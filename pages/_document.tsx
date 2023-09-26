import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons//favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons//favicon-16x16.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />

        <link rel='apple-touch-startup-image' href='/icons/apple-touch-icon.png' />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="application-name" content="My Book" />
        <meta name="apple-mobile-web-app-title" content="My Book" />
        <meta name="description" content="A simple books app to understand NextJS, SSR, SSG, CSR and ReactQuery for SSR and SSG" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
