import {
  TemeriaRegionHistory,
  TemeriaRegionHistory1,
  TemeriaRegionHistory2,
  TemeriaRegionHistory3,
  TemeriaRegionHistory4,
  TemeriaRegionHistory5
} from '../components/TemeriaHistory'

import Characters from '../components/Characters'

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
      <div className='temeriaVillageLight'></div>
      <Characters characterRegion='temeria' />
    </>
  )
}

export default Temeria
