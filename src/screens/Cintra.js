import {
  RegionHistory,
  RegionHistory1,
  RegionHistory2,
  RegionHistory3,
  RegionHistory4
} from '../components/RegionHistory.js'

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
      <Characters characterRegion='cintra' />
    </>
  )
}

export default Cintra
