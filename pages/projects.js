import Link from '../components/Link'

function ProjectsPage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-semi md:mb-2">A brief list of projects which I've created or participated</h1>
      <ul>
        <li className="mb-2">
          <Link href="https://www.bitsacard.com/en">BitsaCard</Link>
        </li>
        <li className="mb-2">
          <Link href="https://app.bitsacard.com/">App BitsaCard</Link>
        </li>
        <li className="mb-2">
          <Link href="https://www.entrenaxsalud.es/">Entrena X Salud</Link>
        </li>
        <li className="mb-2">
          <Link href="https://dev.wallacoin.com/">Wallacoin</Link>
        </li>
        <li>
          <Link href="https://www.brickbro.com/">Brickbro</Link>
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
