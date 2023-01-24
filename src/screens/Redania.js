import {
  RedaniaRegionHistory,
  RedaniaRegionHistory1,
  RedaniaRegionHistory2,
  RedaniaRegionHistory3,
  RedaniaRegionHistory4,
  RedaniaRegionHistory5
} from '../components/RedaniaHistory'

import Characters from '../components/Characters'
import NavMenu from '../components/NavMenu'

const Redania = () => {
  return (
    <>
      <div className='Redania'>
        <RedaniaRegionHistory />
        <RedaniaRegionHistory1 />
        <RedaniaRegionHistory2 />
        <RedaniaRegionHistory3 />
        <RedaniaRegionHistory4 />
        <RedaniaRegionHistory5 />
      </div>
      <NavMenu />
      <Characters characterRegion='redania' />
    </>
  )
}

export default Redania
