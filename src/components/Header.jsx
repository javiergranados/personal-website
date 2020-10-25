import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"

function Header () {
  return (
    <header
      style={{
        background: "var(--dark)",
        marginBottom: '1.45rem',
        borderBottom: "1px solid var(--light)"
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1rem',
        }}
      >
        <Logo style={{
          maxWidth: 50,
        }}/>
          <Link
            to="/"
            style={{
              color: "var(--light)",
              textDecoration: 'none',
            }}
          >
            /home
          </Link>
          <Link
            to="/about"
            style={{
              color: "var(--light)",
              textDecoration: 'none',
            }}
          >
            /about
          </Link>
        <Link
          to="/projects"
          style={{
            color: "var(--light)",
            textDecoration: 'none',
          }}
        >
          /projects
          </Link>
        <Link
          to="/uses"
          style={{
            color: "var(--light)",
            textDecoration: 'none',
          }}
        >
          /uses
          </Link>
      </div>
    </header>
  )
}

export default Header
