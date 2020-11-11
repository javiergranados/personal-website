import PropTypes from 'prop-types'
import Link from 'next/link'

function CustomLink({ href, hideBullet, children }) {
  return (
    <Link href={href}>
      <a target="_blank" className="link">
        {!hideBullet && <span className="hidden type md:inline">▷</span>}
        <span className="value">{children}</span>
      </a>
    </Link>
  )
}

CustomLink.defaultProps = {
  hideBullet: false,
}

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  hideBullet: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default CustomLink
