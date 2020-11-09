function AboutPage() {
  return (
    <>
      <p className="text-4xl font-semi">
        Web Developer | Husband | Father of 2 | Ocasional Rock Climbing | Tea lover | Fan of Nintendo | Fantasy books
        enthusiast
      </p>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'About',
    },
  }
}

export default AboutPage
