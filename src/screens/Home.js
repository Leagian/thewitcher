import logo from '../assets/logo.png'
import video from '../assets/video.mp4'
import son from '../assets/audioHome.mp3'
import AudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'
import '../fonts/OptimusPrinceps.ttf'

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

      <div className='animation-text'>
        <p className='text'>
          {' '}
          Geralt de Riv : c'est l'histoire du destin entrelace de trois
          individus dans le vaste monde du continent.
        </p>
        <p className='text1'>
          {' '}
          humains, elfes, mages, monstres et autres creatures
        </p>
        <p className='text2'>
          {' '}
          luttent et se battent pour survivre et prosperer.
        </p>
        <p className='text3'>
          {' '}
          mais ou se situe la frontiere entre le bien et le mal dans un monde si
          violent ?
        </p>
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

      <div className='braises'>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
        <div className='braise'></div>
      </div>

      {/* PLAYER MUSIQUE */}
      <div className='audio'>
        <AudioPlayer src={son} autoPlay controls />
      </div>
    </>
  )
}

export default Home
