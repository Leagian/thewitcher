import {
  RegionHistory,
  RegionHistory1,
  RegionHistory2,
  RegionHistory3,
  RegionHistory4
} from '../components/RegionHistory.js'
import video from '../assets/video.mp4'
import NavMenu from '../components/NavMenu'

import Characters from '../components/Characters'

const Cintra = () => {
  return (
    <>
      <div className='screen-global'>
        <div className='cintra-global child'>
          <RegionHistory />
          <RegionHistory1 />
          <RegionHistory2 />
          <RegionHistory3 />
          <RegionHistory4 />
        </div>
        <div className='screenScroll-down'></div>

        <div className='screen-background child'>
          <Characters characterRegion='cintra' />
          <video
            id='myVideo'
            src={video}
            autoPlay={true}
            loop={true}
            muted={true}
          ></video>
        </div>
      </div>
      <div className='cintraLight'>
        <div className='cintraCastleLight'></div>
      </div>
      <NavMenu />
    </>
  )
}

export default Cintra
