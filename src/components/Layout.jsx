import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Logo from "../images/header-logo.svg";
import Footer from '/Footer'
import "../styles/normalize.css"
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
        <Logo />
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
