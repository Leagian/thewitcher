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

import video from '../assets/video.mp4'

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
        <div className='screenScroll-down'></div>
      </div>
      <div className='screen-background'>
        <Characters characterRegion='toussaint' />
        <video
          id='myVideo'
          src={video}
          autoPlay={true}
          loop={true}
          muted={true}
        ></video>
      </div>
      <div className='toussaintCastleLight'></div>
      <NavMenu />
    </>
  )
}

export default Toussaint
