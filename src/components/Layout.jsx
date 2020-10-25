import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Cover from "../images/cover.svg";
import Footer from './Footer'
import "../styles/global.css"

function Layout ({ children }) {
  return (
    <>
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 2rem 2rem',
          color: 'var(--light)',
        }}
      >
        <Cover />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
