import {
  KaedwenRegionHistory,
  KaedwenRegionHistory1,
  KaedwenRegionHistory2,
  KaedwenRegionHistory3
} from '../components/KaedwenHistory'

import Characters from '../components/Characters'
import NavMenu from '../components/NavMenu'

const Kaedwen = () => {
  return (
    <>
      <div className='Kaedwen'>
        <KaedwenRegionHistory />
        <KaedwenRegionHistory1 />
        <KaedwenRegionHistory2 />
        <KaedwenRegionHistory3 />
      </div>
      <div className='kaedwenCastleLight'></div>
      <NavMenu />
      <Characters characterRegion='kaedwen' />
    </>
  )
}

export default Kaedwen
