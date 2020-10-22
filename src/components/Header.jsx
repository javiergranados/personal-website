import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function Header ({ siteTitle }) {
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
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: "var(--light)",
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
