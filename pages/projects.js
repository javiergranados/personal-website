import Link from '../components/Link'
import Layout from '../components/Layout'

function ProjectsPage() {
  return (
    <Layout title="Projects">
      <h1 className="text-4xl">A brief list of my public projects</h1>
      <ul>
        <li>
          <Link href="https://www.bitsacard.com/en">BitsaCard</Link>
        </li>
        <li>
          <Link href="https://www.entrenaxsalud.es/">Entrena X Salud</Link>
        </li>
      </ul>
    </Layout>
  )
}

export default ProjectsPage
