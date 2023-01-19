import React, { useCallback, useRef, useState, useEffect } from 'react'

import PrismaZoom from 'react-prismazoom'
import { Link } from 'react-router-dom'

import witcherMapt9 from '../assets/WitcherMapX4T9.jpg'
// import nilfgaardtitle from '../assets/nilfgaardtitle.svg'
// import fog from '../assets/fog.mp4'

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
          {/* <div>
            <video
              src={fog}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: '2000'
              }}
              autoPlay={true}
              loop={true}
              muted={true}
            ></video>
          </div> */}

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
              <div className='kaedwen-region'>
                <Link to={'/kaedwen'}>Kaedwen</Link>
              </div>
              <div className='cintra-region'>
                <Link to={'/cintra'}>Cintra</Link>
              </div>
              <div className='redania-region'>
                <Link to={'/redania'}>Redania</Link>
              </div>
              <div className='nilfgaard-region'>
                <Link to={'/nilfgaard'}>Nilfgaard</Link>
              </div>
              <div className='toussaint-region'>
                <Link to={'/toussaint'}>Toussaint</Link>
              </div>
              <div className='temeria-region'>
                <Link to={'/temeria'}>Temeria</Link>
              </div>
            </div>
          </div>
        </PrismaZoom>
      </div>
    </>
  )
}
export default Map
