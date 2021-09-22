function AboutPage() {
  return (
    <>
      <p className="text-4xl font-semi">
        Software Engineer | Husband | Father of 3 | Climbing lover | Tea drinker | Fan of Nintendo | Fantasy books
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
