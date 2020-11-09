import Link from 'next/link'
import Layout from '../components/Layout'

function ProjectsPage() {
  return (
    <Layout title="Projects">
      <h1 className="text-4xl">A brief list of my public projects</h1>
      <ul>
        <li>
          <Link href="https://www.bitsacard.com/en">
            <a target="_blank" className="text-2xl">
              ▷ BitsaCard
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.entrenaxsalud.es/">
            <a target="_blank" className="text-2xl">
              ▷ Entrena X Salud
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default ProjectsPage
