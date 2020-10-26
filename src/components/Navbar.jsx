import React, { useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => setShowMenu(!showMenu)

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 border-b bg-dark border-light">
      <div className="items-center flex-shrink-0 hidden mr-6 text-white lg:flex">
        <Link to="/">
          <Logo className="w-16 ml-8 mr-2" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          className="flex items-center px-3 py-2 text-teal-200 transition-colors duration-300 ease-in-out border rounded border-light focus:outline-none"
          onClick={handleClick}
        >
          <svg
            className={`${showMenu ? 'hidden' : 'block'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`${showMenu ? 'block' : 'hidden'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          showMenu ? 'flex' : 'hidden'
        } flex-grow w-full lg:flex lg:items-center lg:w-auto lg:flex-row flex-col`}
      >
        <Link to="/" className="block navbar__button odd first lg:hidden">
          /home
        </Link>
        <Link to="/about" className="navbar__button even">
          /about
        </Link>
        <Link to="/projects" className="navbar__button even">
          /projects
        </Link>
        <Link to="/uses" className="navbar__button odd">
          /uses
        </Link>
        {/* TODO:  theme button switch  */}
      </div>
    </nav>
  )
}

export default Navbar
