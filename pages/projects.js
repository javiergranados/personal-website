import Link from '../components/Link'

function ProjectsPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-semi md:mb-2">A brief list of my public projects</h1>
      <ul className="text-left">
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
