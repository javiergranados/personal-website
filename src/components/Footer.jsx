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
    <footer className="mt-2 pt-5 pb-4 pl-8 border-t border-light">
      © {new Date().getFullYear()} {data.site.siteMetadata?.author || ''} - Web Developer
    </footer>
  )
}

export default Footer
