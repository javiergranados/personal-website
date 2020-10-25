import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Cover from "../images/cover.svg";
import Footer from './Footer'
import "../styles/global.css"

function Layout ({ children }) {
  return (
    <div className="flex flex-col flex-1 w-screen h-screen text-base text-light bg-dark">
      <Header />
      <div className="relative flex flex-col flex-1 w-full my-0 mx-auto px-8 max-w-5xl">
        <main className="flex-1">
          <Cover />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
