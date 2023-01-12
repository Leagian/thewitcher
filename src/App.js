import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Cintra from './screens/Cintra'
import Nilfgaard from './screens/Nilfgaard'
import Temeria from './screens/Temeria'
import Redania from './screens/Redania'
import Kaedwen from './screens/Kaedwen'
import Toussaint from './screens/Toussaint'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cintra' element={<Cintra />} />
        <Route path='nilfgaard' element={<Nilfgaard />} />
        <Route path='temeria' element={<Temeria />} />
        <Route path='redania' element={<Redania />} />
        <Route path='kaedwen' element={<Kaedwen />} />
        <Route path='toussaint' element={<Toussaint />} />
      </Routes>
    </div>
  )
}

export default App
