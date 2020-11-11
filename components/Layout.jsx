import PropTypes from 'prop-types'
import Head from 'next/head'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import 'animate.css'

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | Javier Granados`}</title>
      </Head>
      <div className="flex flex-col w-screen h-screen text-base text-light bg-dark font-regular">
        <div className="relative flex flex-col flex-1 w-full overflow-hidden animate__animated animate__fadeIn">
          <Navbar />
          <Main>{children}</Main>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
