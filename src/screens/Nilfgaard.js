import {
  NilfgaardRegionHistory,
  NilfgaardRegionHistory1,
  NilfgaardRegionHistory2,
  NilfgaardRegionHistory3
} from '../components/NilfgaardHistory'

import Characters from '../components/Characters'

const Nilfgaard = () => {
  return (
    <>
      <div className='Nilfgaard'>
        <NilfgaardRegionHistory />
        <NilfgaardRegionHistory1 />
        <NilfgaardRegionHistory2 />
        <NilfgaardRegionHistory3 />
      </div>
      <Characters />
    </>
  )
}

export default Nilfgaard
