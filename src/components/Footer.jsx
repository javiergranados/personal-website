import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

function Footer() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer style={{
      marginTop: '2rem'
    }}>
      © {new Date().getFullYear()} {data.site.siteMetadata?.author || ''} - Web Developer
    </footer>
  )
}

export default Footer
