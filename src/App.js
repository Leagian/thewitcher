import { Routes, Route } from 'react-router-dom'
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
        <Route path='/map' element={<Map />} />
        <Route path='/' element={<Home />} />
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
