import Link from '../components/Link'

function UsesPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-semi md:mb-2">Apps</h1>
      <ul>
        <li>
          <span className="hidden text-2xl md:inline">▷ Editor&ensp;-&ensp;</span>
          <Link href="https://code.visualstudio.com/" hideBullet>
            Visual Studio Code
          </Link>
        </li>
        <li>
          <span className="hidden text-2xl md:inline">▷ Terminal&ensp;-&ensp;</span>
          <Link href="https://iterm2.com/" hideBullet>
            iTerm2
          </Link>
        </li>
        <li>
          <span className="hidden text-2xl md:inline">▷ Settings&ensp;-&ensp;</span>
          <Link href="https://github.com/javiergranados/dotfiles" hideBullet>
            Dot Files repo
          </Link>
        </li>
      </ul>
      <h1 className="mt-10 mb-4 text-4xl font-semi md:mb-2 mb:mt-4">Desk Setup</h1>
      <ul>
        <li>
          <span className="hidden text-2xl md:inline">▷ Laptop&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/Nuevo-Apple-MacBook-pulgadas-almacenamiento/dp/B081G9YQ73/" hideBullet>
            MacBook Pro
          </Link>
        </li>
        <li>
          <span className="hidden text-2xl md:inline">▷ Monitor&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/Dell-DELL-P2421DC-P2421DC/dp/B085XD8NV3/" hideBullet>
            Dell P2421DC
          </Link>
        </li>
        <li>
          <span className="hidden text-2xl md:inline">▷ Keyboard&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/gp/product/B083NRGB42/" hideBullet>
            Drevo Calibur V2 Pro
          </Link>
        </li>
        <li>
          <span className="hidden text-2xl md:inline">▷ Mouse&ensp;-&ensp;</span>
          <Link href="https://www.amazon.es/Logitech-MX-Ergo-Trackball-inal%C3%A1mbrico/dp/B074W227RK/" hideBullet>
            Logitech MX Ergo
          </Link>
        </li>
        <li>
          <span className="hidden text-2xl md:inline">▷ Table top&ensp;-&ensp;</span>
          <Link href="https://www.ikea.com/es/es/p/anfallare-tablero-bambu-00465141/" hideBullet>
            ANFALLARE
          </Link>
        </li>
        <li>
          <span className="hidden text-2xl md:inline">▷ Adjustable Standing Desk&ensp;-&ensp;</span>
          <Link
            href="https://www.flexispot.es/escritorio-regulable-electricamente-e7.html"
            hideBullet
          >
            Flexispot E7
          </Link>
        </li>
      </ul>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Uses',
    },
  }
}

export default UsesPage
