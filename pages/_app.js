import PropTypes from 'prop-types'
import Meta from '../components/Meta'
import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
}

export default MyApp
