import { useState, forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

function Navbar() {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => setShowMenu(!showMenu)

  const Logo = forwardRef(() => {
    return <Image src="/img/logo.svg" alt="logo" width={65} height={50} loading="eager" />
  })

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 border-b bg-dark border-light">
      <div className="items-center flex-shrink-0 hidden mr-6 text-white cursor-pointer lg:flex">
        <Link href="/" passHref>
          <Logo />
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
        <Link href="/">
          <a className={`block navbar__button first odd lg:hidden${(router.pathname === '/' && ' selected') || ''}`}>
            /home
          </a>
        </Link>
        <Link href="/projects">
          <a className={`navbar__button even${(router.pathname === '/projects' && ' selected') || ''}`}>/projects</a>
        </Link>
        <Link href="/uses">
          <a className={`navbar__button odd${(router.pathname === '/uses' && ' selected') || ''}`}>/uses</a>
        </Link>
        <Link href="/about">
          <a className={`navbar__button even${(router.pathname === '/about' && ' selected') || ''}`}>/about</a>
        </Link>
        {/* TODO:  theme button switch  */}
      </div>
    </nav>
  )
}

export default Navbar
