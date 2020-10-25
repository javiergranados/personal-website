import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"

function Header () {
  return (
    <header className="flex items-center content-center mb-2 py-5 border-b border-light">
      <Link to="/" className="mx-2">
        <Logo className="w-16 ml-8 mr-2" />
      </Link>
      <Link to="/about" className="mx-2">
        /about
      </Link>
      <Link to="/projects" className="mx-2">
        /projects
      </Link>
      <Link to="/uses" className="mx-2">
        /uses
      </Link>
    </header>
  )
}

export default Header
