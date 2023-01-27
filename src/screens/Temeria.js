import {
  TemeriaRegionHistory,
  TemeriaRegionHistory1,
  TemeriaRegionHistory2,
  TemeriaRegionHistory3,
  TemeriaRegionHistory4,
  TemeriaRegionHistory5
} from '../components/TemeriaHistory'

import Characters from '../components/Characters'
import NavMenu from '../components/NavMenu'

const Temeria = () => {
  return (
    <>
      <div className='Temeria'>
        <TemeriaRegionHistory />
        <TemeriaRegionHistory1 />
        <TemeriaRegionHistory2 />
        <TemeriaRegionHistory3 />
        <TemeriaRegionHistory4 />
        <TemeriaRegionHistory5 />
      </div>
      <NavMenu />
      <Characters characterRegion='temeria' />
    </>
  )
}

export default Temeria
