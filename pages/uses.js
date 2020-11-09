import Link from 'next/link'
import Layout from '../components/Layout'

function UsesPage() {
  return (
    <Layout title="Uses">
      <h1 className="text-4xl">Apps</h1>
      <ul>
        <li>
          <span className="text-2xl">▷ Editor&ensp;-&ensp;</span>
          <Link href="https://code.visualstudio.com/">
            <a target="_blank" className="text-2xl">
              Visual Studio Code
            </a>
          </Link>
        </li>
        <li>
          <span className="text-2xl">▷ Terminal&ensp;-&ensp;</span>
          <Link href="https://hyper.is/">
            <a target="_blank" className="text-2xl">
              Hyper
            </a>
          </Link>
        </li>
        <li>
          <span className="text-2xl">▷ Settings&ensp;-&ensp;</span>
          <Link href="https://github.com/jvgranados/dotfiles">
            <a target="_blank" className="text-2xl">
              Dot Files repo
            </a>
          </Link>
        </li>
      </ul>
      <h1 className="mt-4 text-4xl">Desk Setup</h1>
      <ul>
        <li>
          <span className="text-2xl">▷ Laptop&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/Apple-MacBook-16-pulgadas-512-GB-almacenamiento/dp/B081GC15CY/">
            <a target="_blank" className="text-2xl">
              MacBook Pro
            </a>
          </Link>
        </li>
        <li>
          <span className="text-2xl">▷ Monitor&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/Apple-inch-Thunderbolt-Display-Refurbished/dp/B07F86TT7W/">
            <a target="_blank" className="text-2xl">
              Apple Thunderbolt Display
            </a>
          </Link>
        </li>
        <li>
          <span className="text-2xl">▷ Keyboard&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/Apple-MLA22Y-A-Teclado/dp/B016UPAXBE/">
            <a target="_blank" className="text-2xl">
              Apple Magic Keyboard
            </a>
          </Link>
        </li>
        <li>
          <span className="text-2xl">▷ Mouse&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/Logitech-MX-Ergo-Trackball-inal%C3%A1mbrico/dp/B074W227RK/">
            <a target="_blank" className="text-2xl">
              Logitech MX Ergo
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default UsesPage
