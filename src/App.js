
import { Routes, Route } from 'react-router-dom'

import CintraTown from './screens/CintraTown'
import NilfgaardTown from './screens/NilfgaardTown'
import KaerMorhen from './screens/KaerMorhen'
import Beauclair from './screens/Beauclair'
import Novigrad from './screens/Novigrad'
import Vizima from './screens/Vizima'
import Map from './screens/Map'
import Home from './screens/Home'
import Cintra from './screens/Cintra'
import Nilfgaard from './screens/Nilfgaard'
import Temeria from './screens/Temeria'
import Redania from './screens/Redania'
import Kaedwen from './screens/Kaedwen'
import Toussaint from './screens/Toussaint'

import Characters from './components/Characters'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='map' element={<Map />} />
        <Route path='cintratown' element={<CintraTown />} />
        <Route path='nilfgaardtown' element={<NilfgaardTown />} />
        <Route path='kaermorhen' element={<KaerMorhen />} />
        <Route path='beauclair' element={<Beauclair />} />
        <Route path='novigrad' element={<Novigrad />} />
        <Route path='vizima' element={<Vizima />} />
        <Route path='cintra' element={<Cintra />} />
        <Route path='nilfgaard' element={<Nilfgaard />} />
        <Route path='temeria' element={<Temeria />} />
        <Route path='redania' element={<Redania />} />
        <Route path='kaedwen' element={<Kaedwen />} />
        <Route path='toussaint' element={<Toussaint />} />
        <Route path='/region/:regionId' element={<Characters />} />
      </Routes>
    </div>
  )
}

export default App
