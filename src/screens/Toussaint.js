import {
  ToussaintRegionHistory,
  ToussaintRegionHistory1,
  ToussaintRegionHistory2,
  ToussaintRegionHistory3,
  ToussaintRegionHistory4,
  ToussaintRegionHistory5,
  ToussaintRegionHistory6,
  ToussaintRegionHistory7
} from '../components/ToussaintHistory'

import Characters from '../components/Characters'
import NavMenu from '../components/NavMenu'

const Toussaint = () => {
  return (
    <>
      <div className='Toussaint'>
        <ToussaintRegionHistory />
        <ToussaintRegionHistory1 />
        <ToussaintRegionHistory2 />
        <ToussaintRegionHistory3 />
        <ToussaintRegionHistory4 />
        <ToussaintRegionHistory5 />
        <ToussaintRegionHistory6 />
        <ToussaintRegionHistory7 />
      </div>
      <div className='toussaintCastleLight'></div>
      <NavMenu />
      <Characters characterRegion='toussaint' />
    </>
  )
}

export default Toussaint
