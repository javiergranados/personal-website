import Head from 'next/head'

function Meta() {
  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>Javier Granados</title>
      <link rel="shortcut icon" href="/img/favicon.png" />
      <meta name="description" content="Welcome to my personal website! 🚀" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    
      {/* Mastodon Meta Tags */}
      <link rel="me" href="https://mastodon.cloud/@javiergranados">

      {/* Open Graph Meta Tags */}
      <meta property="og:url" content="https://javiergranados.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Javier Granados" />
      <meta property="og:description" content="Welcome to my personal website! 🚀" />
      <meta property="og:image" content="https://javiergranados.dev/img/logo.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:url" content="https://javiergranados.dev/" />
      <meta name="twitter:title" content="Javier Granados" />
      <meta name="twitter:description" content="Welcome to my personal website! 🚀" />
      <meta name="twitter:site" content="@jvgranados_" />
      <meta name="twitter:image" content="https://javiergranados.dev/img/logo.png" />
      <meta name="twitter:creator" content="@jvgranados_" />
    </Head>
  )
}

export default Meta
