import PropTypes from 'prop-types'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | Javier Granados`}</title>
      </Head>
      <div className="flex flex-col flex-1 w-screen h-screen text-base text-light bg-dark">
        <Navbar />
        <div className="relative flex flex-col flex-1 w-full max-w-5xl px-8 mx-auto my-0">
          <main className="flex-1">
            <div className="block md:hidden">
              <Image src="/img/cover.svg" alt="cover" width={360} height={275} />
            </div>
            <div className="hidden md:block lg:hidden">
              <Image src="/img/cover-md.svg" alt="cover" width={705} height={380} />
            </div>
            <div className="hidden lg:block lg:max-w-4xl">
              <Image src="/img/cover-lg.svg" alt="cover" width={895} height={360} />
            </div>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
