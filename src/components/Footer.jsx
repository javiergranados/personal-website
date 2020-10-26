import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <footer className="pt-5 pb-4 pl-8 mt-2 border-t border-light">
      {`© ${new Date().getFullYear()} ${data.site.siteMetadata ? data.site.siteMetadata.author : ''} - Web Developer`}
    </footer>
  )
}

export default Footer
