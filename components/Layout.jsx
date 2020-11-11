import PropTypes from 'prop-types'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from './Navbar'
import Social from './Social'
import Footer from './Footer'
import 'animate.css'

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | Javier Granados`}</title>
      </Head>
      <div className="flex flex-col w-screen h-screen text-base text-light bg-dark font-regular">
        <div className="relative flex flex-col flex-1 w-full overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-auto">
            <div className="w-full max-w-5xl px-8 pt-5 pb-10 mx-auto my-0">
              <div className="block md:hidden animate__animated animate__fadeIn">
                <Image src="/img/cover.svg" alt="cover" width={360} height={275} loading="eager" />
              </div>
              <div className="hidden md:block lg:hidden animate__animated animate__fadeIn">
                <Image src="/img/cover-md.svg" alt="cover" width={705} height={380} loading="eager" />
              </div>
              <div className="hidden lg:block lg:max-w-4xl animate__animated animate__fadeIn">
                <Image src="/img/cover-lg.svg" alt="cover" width={895} height={360} loading="eager" />
              </div>
              <Social />
              <div className="text-center animate__animated animate__fadeIn md:text-left">{children}</div>
            </div>
          </main>
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
