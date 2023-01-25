import {
  RegionHistory,
  RegionHistory1,
  RegionHistory2,
  RegionHistory3,
  RegionHistory4
} from '../components/RegionHistory.js'
import NavMenu from '../components/NavMenu'

import Characters from '../components/Characters'

const Cintra = () => {
  return (
    <>
      <div className='Cintra'>
        <RegionHistory />
        <RegionHistory1 />
        <RegionHistory2 />
        <RegionHistory3 />
        <RegionHistory4 />
      </div>
      <div className='cintraCastleLight'></div>
      <NavMenu />
      <Characters characterRegion='cintra' />
    </>
  )
}

export default Cintra
