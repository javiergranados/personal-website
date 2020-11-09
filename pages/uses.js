import Link from '../components/Link'
import Layout from '../components/Layout'

function UsesPage() {
  return (
    <Layout title="Uses">
      <h1 className="text-4xl font-semi">Apps</h1>
      <ul>
        <li>
          <span className="text-2xl">▷ Editor&ensp;-&ensp;</span>
          <Link href="https://code.visualstudio.com/" hideBullet>
            Visual Studio Code
          </Link>
        </li>
        <li>
          <span className="text-2xl">▷ Terminal&ensp;-&ensp;</span>
          <Link href="https://hyper.is/" hideBullet>
            Hyper
          </Link>
        </li>
        <li>
          <span className="text-2xl">▷ Settings&ensp;-&ensp;</span>
          <Link href="https://github.com/jvgranados/dotfiles" hideBullet>
            Dot Files repo
          </Link>
        </li>
      </ul>
      <h1 className="mt-4 text-4xl font-semi">Desk Setup</h1>
      <ul>
        <li>
          <span className="text-2xl">▷ Laptop&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/Apple-MacBook-16-pulgadas-512-GB-almacenamiento/dp/B081GC15CY/" hideBullet>
            MacBook Pro
          </Link>
        </li>
        <li>
          <span className="text-2xl">▷ Monitor&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/Apple-inch-Thunderbolt-Display-Refurbished/dp/B07F86TT7W/" hideBullet>
            Apple Thunderbolt Display
          </Link>
        </li>
        <li>
          <span className="text-2xl">▷ Keyboard&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/Apple-MLA22Y-A-Teclado/dp/B016UPAXBE/" hideBullet>
            Apple Magic Keyboard
          </Link>
        </li>
        <li>
          <span className="text-2xl">▷ Mouse&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/Logitech-MX-Ergo-Trackball-inal%C3%A1mbrico/dp/B074W227RK/" hideBullet>
            Logitech MX Ergo
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default UsesPage
