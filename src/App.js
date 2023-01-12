import { Routes, Route } from 'react-router-dom'

import Characters from './components/Characters'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/region/:regionId' element={<Characters />} />
      </Routes>
    </div>
  )
}

export default App
