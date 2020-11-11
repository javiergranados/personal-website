import PropTypes from 'prop-types'
import Image from 'next/image'
import Social from './Social'

function Main({ children }) {
  return (
    <main className="flex-1 overflow-auto">
      <div className="w-full max-w-5xl px-8 pt-5 pb-10 mx-auto my-0">
        <div className="block md:hidden">
          <Image src="/img/cover.svg" alt="cover" width={360} height={275} loading="eager" />
        </div>
        <div className="hidden md:block lg:hidden">
          <Image src="/img/cover-md.svg" alt="cover" width={705} height={380} loading="eager" />
        </div>
        <div className="hidden lg:block lg:max-w-4xl">
          <Image src="/img/cover-lg.svg" alt="cover" width={895} height={360} loading="eager" />
        </div>
        <Social />
        <div className="text-center md:text-left">{children}</div>
      </div>
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
