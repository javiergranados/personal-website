import Layout from '../components/Layout'

function IndexPage() {
  return (
    <Layout title="Home">
      <h1 className="text-4xl">
        Hi everyone!&nbsp;
        <span role="img" aria-label="smiley face">
          👋🏻🙂
        </span>
      </h1>
      <p className="text-3xl">
        I&apos;m Javier Granados, a web developer based in Alicante, Spain
        <span role="img" aria-label="flag">
          🇪🇸
        </span>
      </p>
    </Layout>
  )
}

export default IndexPage
