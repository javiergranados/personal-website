function IndexPage() {
  return (
    <>
      <h1 className="text-4xl font-semi">
        Hi everyone!&nbsp;&nbsp;
        <span role="img" aria-label="smiley face">
          👋🏻🙂
        </span>
      </h1>
      <p className="text-3xl">
        I&apos;m Javier Granados, a web developer based in Seville, Spain&nbsp;
        <span role="img" aria-label="flag">
          🇪🇸
        </span>
      </p>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
    },
  }
}

export default IndexPage
