function NotFoundPage() {
  return (
    <>
      <h1 className="text-4xl font-semi">404: Not Found</h1>
      <p className="text-3xl">Sorry, I didn`t create this page...yet</p>
      <p />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: '404: Not found',
    },
  }
}

export default NotFoundPage
