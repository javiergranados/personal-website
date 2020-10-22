import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Logo from "../images/logo.svg";
import "../styles/normalize.css"
import "../styles/global.css"

function Layout ({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 2rem 2rem',
          color: 'var(--light)',
        }}
      >
        <Logo />
        <main>{children}</main>
        <footer style={{
          marginTop: '2rem'
        }}>
          © {new Date().getFullYear()} {data.site.siteMetadata?.author || ''}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
