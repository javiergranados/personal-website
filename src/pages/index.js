import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-2xl">/home</h1>
      <p>Home page</p>
    </Layout>
  )
}

export default IndexPage
