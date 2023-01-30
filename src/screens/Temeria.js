import {
  TemeriaRegionHistory,
  TemeriaRegionHistory1,
  TemeriaRegionHistory2,
  TemeriaRegionHistory3,
  TemeriaRegionHistory4,
  TemeriaRegionHistory5
} from '../components/TemeriaHistory'

import video from '../assets/video.mp4'

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
        <div className='screenScroll-down'></div>
      </div>
      <div className='screen-background'>
        <Characters characterRegion='temeria' />
        <video
          id='myVideo'
          src={video}
          autoPlay={true}
          loop={true}
          muted={true}
        ></video>
      </div>
      <div className='temeriaVillageLight'></div>
      <NavMenu />
    </>
  )
}

export default Temeria
