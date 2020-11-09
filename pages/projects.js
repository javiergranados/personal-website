import Link from '../components/Link'

function ProjectsPage() {
  return (
    <>
      <h1 className="text-4xl font-semi">A brief list of my public projects</h1>
      <ul>
        <li>
          <Link href="https://www.bitsacard.com/en">BitsaCard</Link>
        </li>
        <li>
          <Link href="https://www.entrenaxsalud.es/">Entrena X Salud</Link>
        </li>
      </ul>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Projects',
    },
  }
}

export default ProjectsPage
