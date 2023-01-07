import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
      {/* A SUPPRIMER SI BESOIN / MIS EN PLACE JUSTE POUR LES ESSAIS */}
      <h1>HOME</h1>
      <h2>
        <Link to='cintratown'>Cintra Town</Link>
      </h2>
      <h2>
        <Link to='nilfgaard'>Nilfgaard</Link>
      </h2>
      <h2>
        <Link to='kaermorhen'>Kaer Morhen</Link>
      </h2>
      <h2>
        <Link to='beauclair'>Beauclair</Link>
      </h2>
      <h2>
        <Link to='novigrad'>Novigrad</Link>
      </h2>
      <h2>
        <Link to='vizima'>Vizima</Link>
      </h2>
    </div>
  )
}

export default Home
