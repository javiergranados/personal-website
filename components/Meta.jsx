import Head from 'next/head'

function Meta() {
  return (
    <Head>
      <meta property="og:url" content="https://jvgranados.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Javier Granados" />
      <meta property="og:description" content="Welcome to my personal website! 🚀" />
      <meta property="og:image" content="https://jvgranados.com/img/logo.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="shortcut icon" href="/img/favicon.png" />
      <title>Javier Granados</title>
    </Head>
  )
}

export default Meta
