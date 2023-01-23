import logo from '../assets/logo.png'
import smoke from '../assets/smoke.png'
import cloud from '../assets/cloud.png'
import video from '../assets/video.mp4'
import son from '../assets/Vagabond.mp3'
import AudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Link to={'/map'}>
        <div className='logo'>
          <img className='imglogo' src={logo} alt='Logo' />
        </div>
      </Link>
      <div onCanPlay='parent-gradient'>
        <div className='gradient'></div>
      </div>

      <div>
        <video
          src={video}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          autoPlay={true}
          loop={true}
          muted={true}
        ></video>
      </div>

      <div className='cloud' id='cloud1'></div>
      <div className='cloud' id='cloud2'></div>
      <div className='cloud' id='cloud3'></div>
      <div className='cloud' id='cloud4'></div>

      <div>
        <AudioPlayer src={son} autoPlay controls />
      </div>
    </>
  )
}

export default Home
