import {
  KaedwenRegionHistory,
  KaedwenRegionHistory1,
  KaedwenRegionHistory2,
  KaedwenRegionHistory3
} from '../components/KaedwenHistory'

import video from '../assets/video.mp4'

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
        <div className='screenScroll-down'></div>
      </div>
      <div className='screen-background'>
        <Characters characterRegion='kaedwen' />
        <video
          id='myVideo'
          src={video}
          autoPlay={true}
          loop={true}
          muted={true}
        ></video>
      </div>
      <div className='kaedwenLight'>
        <div className='kaedwenCastleLight'></div>
      </div>
      <NavMenu />
    </>
  )
}

export default Kaedwen
