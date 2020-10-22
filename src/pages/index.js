import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.site.siteMetadata?.author || 'Title'}</h1>
      <p>Web Developer</p>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default IndexPage
