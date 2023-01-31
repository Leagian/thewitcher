import React, { useCallback, useRef, useState, useEffect } from 'react'
import PrismaZoom from 'react-prismazoom'
import { Link } from 'react-router-dom'
import AudioPlayer from 'react-audio-player'

import '../fonts/Morpheus.TTF'
import '../fonts/OptimusPrinceps.ttf'
import mapAmbient_ from '../assets/mapAmbient2.wav'

import witcherMapt9 from '../assets/WitcherMapX4T9.jpg'
import nilfgaardtitle from '../assets/nilfgaardtitle.svg'
import cintraTitle from '../assets/cintraTitle.svg'
import toussaintTitle from '../assets/toussaintTitle.svg'
import kaedwenTitle from '../assets/kaedwenTitle.svg'
import redaniaTitle from '../assets/redaniaTitle.svg'
import temeriaTitle from '../assets/temeriaTitle.svg'
import soddenTitle from '../assets/soddenTitle.svg'
import nazairTitle from '../assets/nazairTitle.svg'
import ebbingTitle from '../assets/ebbingTitle.svg'
import mettinaTitle from '../assets/mettinaTitle.svg'
import vicovaroTitle from '../assets/vicovaroTitle.svg'
import gemeraTitle from '../assets/gemeraTitle.svg'
import skelligeTitle from '../assets/skelligeTitle.svg'
import cidarisTitle from '../assets/cidarisTitle.svg'
import brokilonTitle from '../assets/brokilonTitle.svg'
import aedrinTitle from '../assets/aedrinTitle.svg'
import verdenTitle from '../assets/verdenTitle.svg'
import kovirTitle from '../assets/kovirTitle.svg'
import etoliaTitle from '../assets/etoliaTitle.svg'
import bruggeTitle from '../assets/bruggeTitle.svg'
import lyriaTitle from '../assets/lyriaTitle.svg'
import mahakamTitle from '../assets/mahakamTitle.svg'
import jamurlakTitle from '../assets/jamurlakTitle.svg'
import boussoleMap from '../assets/boussoleMap.svg'

/* ZOOM CARTE */

const Map = () => {
  const prismaZoom = useRef(PrismaZoom)
  const zoomCounterRef = useRef(HTMLSpanElement)
  console.log(prismaZoom)

  const onZoomChange = useCallback(zoom => {
    if (!zoomCounterRef.current) return
    zoomCounterRef.current.innerText = `${Math.round(zoom * 100)}%`
  }, [])

  /* HOVER VILLES */

  const [novigradHovered, setNovigradHovered] = useState(false)
  const [kaermorhenHovered, setKaermorhenHovered] = useState(false)
  const [cintraHovered, setCintraHovered] = useState(false)
  const [nilfgaardHovered, setNilfgaardHovered] = useState(false)
  const [beauclairHovered, setBeauclairHovered] = useState(false)
  const [vizimaHovered, setVizimaHovered] = useState(false)

  const novigradRef = useRef(null)
  const kaermorhenRef = useRef(null)
  const cintraRef = useRef(null)
  const nilfgaardRef = useRef(null)
  const beauclairRef = useRef(null)
  const vizimaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setNovigradHovered(true)
    const handleMouseLeave = () => setNovigradHovered(false)
    if (novigradRef.current) {
      novigradRef.current.addEventListener('mouseenter', handleMouseEnter)
      novigradRef.current.addEventListener('mouseleave', handleMouseLeave)
    }
    return () => {
      if (novigradRef.current) {
        novigradRef.current.removeEventListener('mouseenter', handleMouseEnter)
        novigradRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [novigradRef])

  useEffect(() => {
    const handleMouseEnter = () => setKaermorhenHovered(true)
    const handleMouseLeave = () => setKaermorhenHovered(false)
    if (kaermorhenRef.current) {
      kaermorhenRef.current.addEventListener('mouseenter', handleMouseEnter)
      kaermorhenRef.current.addEventListener('mouseleave', handleMouseLeave)
    }
    return () => {
      if (kaermorhenRef.current) {
        kaermorhenRef.current.removeEventListener(
          'mouseenter',
          handleMouseEnter
        )
        kaermorhenRef.current.removeEventListener(
          'mouseleave',
          handleMouseLeave
        )
      }
    }
  }, [kaermorhenRef])

  useEffect(() => {
    const handleMouseEnter = () => setCintraHovered(true)
    const handleMouseLeave = () => setCintraHovered(false)
    if (cintraRef.current) {
      cintraRef.current.addEventListener('mouseenter', handleMouseEnter)
      cintraRef.current.addEventListener('mouseleave', handleMouseLeave)
    }
    return () => {
      if (cintraRef.current) {
        cintraRef.current.removeEventListener('mouseenter', handleMouseEnter)
        cintraRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [cintraRef])

  useEffect(() => {
    const handleMouseEnter = () => setNilfgaardHovered(true)
    const handleMouseLeave = () => setNilfgaardHovered(false)
    if (nilfgaardRef.current) {
      nilfgaardRef.current.addEventListener('mouseenter', handleMouseEnter)
      nilfgaardRef.current.addEventListener('mouseleave', handleMouseLeave)
    }
    return () => {
      if (nilfgaardRef.current) {
        nilfgaardRef.current.removeEventListener('mouseenter', handleMouseEnter)
        nilfgaardRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [nilfgaardRef])

  useEffect(() => {
    const handleMouseEnter = () => setBeauclairHovered(true)
    const handleMouseLeave = () => setBeauclairHovered(false)
    if (beauclairRef.current) {
      beauclairRef.current.addEventListener('mouseenter', handleMouseEnter)
      beauclairRef.current.addEventListener('mouseleave', handleMouseLeave)
    }
    return () => {
      if (beauclairRef.current) {
        beauclairRef.current.removeEventListener('mouseenter', handleMouseEnter)
        beauclairRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [beauclairRef])

  useEffect(() => {
    const handleMouseEnter = () => setVizimaHovered(true)
    const handleMouseLeave = () => setVizimaHovered(false)
    if (vizimaRef.current) {
      vizimaRef.current.addEventListener('mouseenter', handleMouseEnter)
      vizimaRef.current.addEventListener('mouseleave', handleMouseLeave)
    }
    return () => {
      if (vizimaRef.current) {
        vizimaRef.current.removeEventListener('mouseenter', handleMouseEnter)
        vizimaRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [vizimaRef])

  return (
    <>
      <div id='musicPlayer'>
        <AudioPlayer
          id='music'
          src={mapAmbient_}
          autoPlay={true}
          controls
          loop={true}
          muted={false}
          volume={0.1}
        />
      </div>

      <div className='map-global'>
        <PrismaZoom
          className='map-zoom'
          onZoomChange={onZoomChange}
          maxZoom={8}
          minZoom={1}
          ref={node => {
            prismaZoom.current = node
          }}
        >
          <img src={witcherMapt9} className='map-image' />
          <div className='link-town'>
            <div className='towns'>
              <button id='novigrad-town' ref={novigradRef}>
                {novigradHovered && <Link to={'/novigrad'}>Novigrad</Link>}
              </button>
              <button id='kaermorhen-town' ref={kaermorhenRef}>
                {kaermorhenHovered && (
                  <Link to={'/kaermorhen'}>Kaer-Morhen</Link>
                )}
              </button>
              <button id='cintra-town' ref={cintraRef}>
                {cintraHovered && <Link to={'/cintratown'}>Cintra</Link>}
              </button>
              <button id='nilfgaard-town' ref={nilfgaardRef}>
                {nilfgaardHovered && (
                  <Link to={'/nilfgaardtown'}>Nilfgaard</Link>
                )}
              </button>
              <button id='beauclair-town' ref={beauclairRef}>
                {beauclairHovered && <Link to={'/beauclair'}>Beauclair</Link>}
              </button>
              <button id='vizima-town' ref={vizimaRef}>
                {vizimaHovered && <Link to={'/vizima'}>Vizima</Link>}
              </button>
            </div>
          </div>
          <div className='link-region'>
            <div className='regions'>
              <a id='kaedwen-region'>
                <Link to={'/kaedwen'}>
                  <img src={kaedwenTitle} />
                </Link>
              </a>
              <a id='cintra-region'>
                <Link to={'/cintra'}>
                  <img src={cintraTitle} />
                </Link>
              </a>
              <a id='redania-region'>
                <Link to={'/redania'}>
                  <img src={redaniaTitle} />
                </Link>
              </a>
              <a id='nilfgaard-region'>
                <Link to={'/nilfgaard'}>
                  <img src={nilfgaardtitle} />
                </Link>
              </a>
              <a id='toussaint-region'>
                <Link to={'/toussaint'}>
                  <img src={toussaintTitle} />
                </Link>
              </a>
              <a id='temeria-region'>
                <Link to={'/temeria'}>
                  <img src={temeriaTitle} />
                </Link>
              </a>
              <div id='sodden-region'>
                <img src={soddenTitle} />
              </div>
              <div id='nazair-region'>
                <img src={nazairTitle} />
              </div>
              <div id='ebbing-region'>
                <img src={ebbingTitle} />
              </div>
              <div id='mettina-region'>
                <img src={mettinaTitle} />
              </div>
              <div id='vicovaro-region'>
                <img src={vicovaroTitle} />
              </div>
              <div id='gemera-region'>
                <img src={gemeraTitle} />
              </div>
              <div id='skellige-region'>
                <img src={skelligeTitle} />
              </div>
              <div id='cidaris-region'>
                <img src={cidarisTitle} />
              </div>
              <div id='brokilon-region'>
                <img src={brokilonTitle} />
              </div>
              <div id='aedrin-region'>
                <img src={aedrinTitle} />
              </div>
              <div id='verden-region'>
                <img src={verdenTitle} />
              </div>
              <div id='kovir-region'>
                <img src={kovirTitle} />
              </div>
              <div id='etolia-region'>
                <img src={etoliaTitle} />
              </div>
              <div id='brugge-region'>
                <img src={bruggeTitle} />
              </div>
              <div id='lyria-region'>
                <img src={lyriaTitle} />
              </div>
              <div id='mahakam-region'>
                <img src={mahakamTitle} />
              </div>
              <div id='jamurlak-region'>
                <img src={jamurlakTitle} />
              </div>
              <div id='boussoleMap'>
                <img src={boussoleMap} />
              </div>
            </div>
          </div>
        </PrismaZoom>
      </div>
    </>
  )
}
export default Map
