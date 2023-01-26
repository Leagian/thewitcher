import {
  NilfgaardRegionHistory,
  NilfgaardRegionHistory1,
  NilfgaardRegionHistory2,
  NilfgaardRegionHistory3
} from '../components/NilfgaardHistory'

import video from '../assets/video.mp4'

import Characters from '../components/Characters'
import NavMenu from '../components/NavMenu'

const Nilfgaard = () => {
  return (
    <>
      <div className='Nilfgaard'>
        <NilfgaardRegionHistory />
        <NilfgaardRegionHistory1 />
        <NilfgaardRegionHistory2 />
        <NilfgaardRegionHistory3 />
        <div className='screenScroll-down'></div>
      </div>
      <div className='screen-background'>
        <Characters characterRegion='nilfgaard' />
        <video
          id='myVideo'
          src={video}
          autoPlay={true}
          loop={true}
          muted={true}
        ></video>
      </div>
      <div className='nilfgaardCastleLight'></div>
      <NavMenu />
      <Characters characterRegion='nilfgaard' />
    </>
  )
}

export default Nilfgaard
