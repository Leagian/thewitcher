import { Routes, Route } from 'react-router-dom'

import Home from './screens/Home'
import CintraTown from './screens/CintraTown'
import Nilfgaard from './screens/Nilfgaard'
import KaerMorhen from './screens/KaerMorhen'
import Beauclair from './screens/Beauclair'
import Novigrad from './screens/Novigrad'
import Vizima from './screens/Vizima'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cintratown' element={<CintraTown />} />
        <Route path='nilfgaard' element={<Nilfgaard />} />
        <Route path='kaermorhen' element={<KaerMorhen />} />
        <Route path='beauclair' element={<Beauclair />} />
        <Route path='novigrad' element={<Novigrad />} />
        <Route path='vizima' element={<Vizima />} />
      </Routes>
    </div>
  )
}

export default App
