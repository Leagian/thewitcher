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
      <div className='nilfgaardCastleLight'></div>
      <Characters characterRegion='nilfgaard' />
    </>
  )
}

export default Nilfgaard
