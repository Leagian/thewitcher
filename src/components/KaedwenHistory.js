import { useState } from 'react'
import { useEffect, useRef } from 'react'
import {
  KaedwenModal,
  KaedwenModal1,
  KaedwenModal2,
  KaedwenModal3
} from '../components/KaedwenModal.js'
import './KaedwenModal.scss'

function KaedwenRegionHistory() {
  const [kaedwenHovered, setKaedwenHovered] = useState(false)

  const kaedwenRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setKaedwenHovered(true)

    if (kaedwenRef.current) {
      kaedwenRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (kaedwenRef.current) {
        kaedwenRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [kaedwenRef])

  return (
    <div className='RegionHistory'>
      <button
        className='kOpenModalBtn'
        ref={kaedwenRef}
        onClick={() => {
          setKaedwenHovered(true)
        }}
      ></button>
      {kaedwenHovered && <KaedwenModal closeModal={setKaedwenHovered} />}
    </div>
  )
}

function KaedwenRegionHistory1() {
  const [kaedwenHovered, setKaedwenHovered] = useState(false)

  const kaedwenRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setKaedwenHovered(true)

    if (kaedwenRef.current) {
      kaedwenRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (kaedwenRef.current) {
        kaedwenRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [kaedwenRef])

  return (
    <div className='RegionHistory'>
      <button
        className='kOpenModalBtn1'
        ref={kaedwenRef}
        onClick={() => {
          setKaedwenHovered(true)
        }}
      ></button>
      {kaedwenHovered && <KaedwenModal1 closeModal={setKaedwenHovered} />}
    </div>
  )
}

function KaedwenRegionHistory2() {
  const [kaedwenHovered, setKaedwenHovered] = useState(false)

  const kaedwenRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setKaedwenHovered(true)

    if (kaedwenRef.current) {
      kaedwenRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (kaedwenRef.current) {
        kaedwenRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [kaedwenRef])

  return (
    <div className='RegionHistory'>
      <button
        className='kOpenModalBtn2'
        ref={kaedwenRef}
        onClick={() => {
          setKaedwenHovered(true)
        }}
      ></button>
      {kaedwenHovered && <KaedwenModal2 closeModal={setKaedwenHovered} />}
    </div>
  )
}

function KaedwenRegionHistory3() {
  const [kaedwenHovered, setKaedwenHovered] = useState(false)

  const kaedwenRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setKaedwenHovered(true)

    if (kaedwenRef.current) {
      kaedwenRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (kaedwenRef.current) {
        kaedwenRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [kaedwenRef])

  return (
    <div className='RegionHistory'>
      <button
        className='kOpenModalBtn3'
        ref={kaedwenRef}
        onClick={() => {
          setKaedwenHovered(true)
        }}
      ></button>
      {kaedwenHovered && <KaedwenModal3 closeModal={setKaedwenHovered} />}
    </div>
  )
}

export {
  KaedwenRegionHistory,
  KaedwenRegionHistory1,
  KaedwenRegionHistory2,
  KaedwenRegionHistory3
}
