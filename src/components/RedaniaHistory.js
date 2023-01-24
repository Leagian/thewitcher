import { useState } from 'react'
import { useEffect, useRef } from 'react'
import {
  RedaniaModal,
  RedaniaModal1,
  RedaniaModal2,
  RedaniaModal3,
  RedaniaModal4,
  RedaniaModal5
} from '../components/RedaniaModal.js'
import './RedaniaModal.scss'

function RedaniaRegionHistory() {
  const [redaniaHovered, setRedaniaHovered] = useState(false)

  const redaniaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setRedaniaHovered(true)

    if (redaniaRef.current) {
      redaniaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (redaniaRef.current) {
        redaniaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [redaniaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn'
        ref={redaniaRef}
        onClick={() => {
          setRedaniaHovered(true)
        }}
      ></button>
      {redaniaHovered && <RedaniaModal closeModal={setRedaniaHovered} />}
    </div>
  )
}

function RedaniaRegionHistory1() {
  const [redaniaHovered, setRedaniaHovered] = useState(false)

  const redaniaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setRedaniaHovered(true)

    if (redaniaRef.current) {
      redaniaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (redaniaRef.current) {
        redaniaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [redaniaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn1'
        ref={redaniaRef}
        onClick={() => {
          setRedaniaHovered(true)
        }}
      ></button>
      {redaniaHovered && <RedaniaModal1 closeModal={setRedaniaHovered} />}
    </div>
  )
}

function RedaniaRegionHistory2() {
  const [redaniaHovered, setRedaniaHovered] = useState(false)

  const redaniaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setRedaniaHovered(true)

    if (redaniaRef.current) {
      redaniaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (redaniaRef.current) {
        redaniaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [redaniaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn2'
        ref={redaniaRef}
        onClick={() => {
          setRedaniaHovered(true)
        }}
      ></button>
      {redaniaHovered && <RedaniaModal2 closeModal={setRedaniaHovered} />}
    </div>
  )
}

function RedaniaRegionHistory3() {
  const [redaniaHovered, setRedaniaHovered] = useState(false)

  const redaniaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setRedaniaHovered(true)

    if (redaniaRef.current) {
      redaniaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (redaniaRef.current) {
        redaniaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [redaniaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn3'
        ref={redaniaRef}
        onClick={() => {
          setRedaniaHovered(true)
        }}
      ></button>
      {redaniaHovered && <RedaniaModal3 closeModal={setRedaniaHovered} />}
    </div>
  )
}

function RedaniaRegionHistory4() {
  const [redaniaHovered, setRedaniaHovered] = useState(false)

  const redaniaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setRedaniaHovered(true)

    if (redaniaRef.current) {
      redaniaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (redaniaRef.current) {
        redaniaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [redaniaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn4'
        ref={redaniaRef}
        onClick={() => {
          setRedaniaHovered(true)
        }}
      ></button>
      {redaniaHovered && <RedaniaModal4 closeModal={setRedaniaHovered} />}
    </div>
  )
}

function RedaniaRegionHistory5() {
  const [redaniaHovered, setRedaniaHovered] = useState(false)

  const redaniaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setRedaniaHovered(true)

    if (redaniaRef.current) {
      redaniaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (redaniaRef.current) {
        redaniaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [redaniaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn5'
        ref={redaniaRef}
        onClick={() => {
          setRedaniaHovered(true)
        }}
      ></button>
      {redaniaHovered && <RedaniaModal5 closeModal={setRedaniaHovered} />}
    </div>
  )
}

export {
  RedaniaRegionHistory,
  RedaniaRegionHistory1,
  RedaniaRegionHistory2,
  RedaniaRegionHistory3,
  RedaniaRegionHistory4,
  RedaniaRegionHistory5
}
