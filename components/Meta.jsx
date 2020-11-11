import Head from 'next/head'

function Meta() {
  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>Javier Granados</title>
      <link rel="shortcut icon" href="/img/favicon.png" />
      <meta name="description" content="Welcome to my personal website! 🚀" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {/* Open Graph Meta Tags */}
      <meta property="og:url" content="https://jvgranados.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Javier Granados" />
      <meta property="og:description" content="Welcome to my personal website! 🚀" />
      <meta property="og:image" content="https://jvgranados.com/img/logo.svg" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="jvgranados.com" />
      <meta property="twitter:url" content="https://jvgranados.com/" />
      <meta name="twitter:title" content="Javier Granados" />
      <meta name="twitter:description" content="Welcome to my personal website! 🚀" />
      <meta name="twitter:image" content="https://jvgranados.com/img/logo.svg" />
    </Head>
  )
}

export default Meta
