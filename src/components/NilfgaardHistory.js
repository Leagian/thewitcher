import { useState } from 'react'
import { useEffect, useRef } from 'react'
import {
  NilfgaardModal,
  NilfgaardModal1,
  NilfgaardModal2,
  NilfgaardModal3
} from '../components/NilfgaardModal.js'
import './NilfgaardModal.scss'

function NilfgaardRegionHistory() {
  const [nilfgaardHovered, setNilfgaardHovered] = useState(false)

  const nilfgaardRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setNilfgaardHovered(true)

    if (nilfgaardRef.current) {
      nilfgaardRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (nilfgaardRef.current) {
        nilfgaardRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [nilfgaardRef])

  return (
    <div className='RegionHistory'>
      <button
        className='nOpenModalBtn'
        ref={nilfgaardRef}
        onClick={() => {
          setNilfgaardHovered(true)
        }}
      ></button>
      {nilfgaardHovered && <NilfgaardModal closeModal={setNilfgaardHovered} />}
    </div>
  )
}

function NilfgaardRegionHistory1() {
  const [nilfgaardHovered, setNilfgaardHovered] = useState(false)

  const nilfgaardRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setNilfgaardHovered(true)

    if (nilfgaardRef.current) {
      nilfgaardRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (nilfgaardRef.current) {
        nilfgaardRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [nilfgaardRef])

  return (
    <div className='RegionHistory'>
      <button
        className='nOpenModalBtn1'
        ref={nilfgaardRef}
        onClick={() => {
          setNilfgaardHovered(true)
        }}
      ></button>
      {nilfgaardHovered && <NilfgaardModal1 closeModal={setNilfgaardHovered} />}
    </div>
  )
}

function NilfgaardRegionHistory2() {
  const [nilfgaardHovered, setNilfgaardHovered] = useState(false)

  const nilfgaardRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setNilfgaardHovered(true)

    if (nilfgaardRef.current) {
      nilfgaardRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (nilfgaardRef.current) {
        nilfgaardRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [nilfgaardRef])

  return (
    <div className='RegionHistory'>
      <button
        className='nOpenModalBtn2'
        ref={nilfgaardRef}
        onClick={() => {
          setNilfgaardHovered(true)
        }}
      ></button>
      {nilfgaardHovered && <NilfgaardModal2 closeModal={setNilfgaardHovered} />}
    </div>
  )
}

function NilfgaardRegionHistory3() {
  const [nilfgaardHovered, setNilfgaardHovered] = useState(false)

  const nilfgaardRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setNilfgaardHovered(true)

    if (nilfgaardRef.current) {
      nilfgaardRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (nilfgaardRef.current) {
        nilfgaardRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [nilfgaardRef])

  return (
    <div className='RegionHistory'>
      <button
        className='nOpenModalBtn3'
        ref={nilfgaardRef}
        onClick={() => {
          setNilfgaardHovered(true)
        }}
      ></button>
      {nilfgaardHovered && <NilfgaardModal3 closeModal={setNilfgaardHovered} />}
    </div>
  )
}

export {
  NilfgaardRegionHistory,
  NilfgaardRegionHistory1,
  NilfgaardRegionHistory2,
  NilfgaardRegionHistory3
}
