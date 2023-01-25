import {
  NilfgaardRegionHistory,
  NilfgaardRegionHistory1,
  NilfgaardRegionHistory2,
  NilfgaardRegionHistory3
} from '../components/NilfgaardHistory'

import Characters from '../components/Characters'
import NavMenu from '../components/NavMenu'

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
      <NavMenu />
      <Characters characterRegion='nilfgaard' />
    </>
  )
}

export default Nilfgaard
