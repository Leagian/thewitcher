import { useState } from 'react'
import { useEffect, useRef } from 'react'
import {
  TemeriaModal,
  TemeriaModal1,
  TemeriaModal2,
  TemeriaModal3,
  TemeriaModal4,
  TemeriaModal5
} from '../components/TemeriaModal.js'
import './TemeriaModal.scss'

function TemeriaRegionHistory() {
  const [temeriaHovered, setTemeriaHovered] = useState(false)

  const temeriaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setTemeriaHovered(true)

    if (temeriaRef.current) {
      temeriaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (temeriaRef.current) {
        temeriaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [temeriaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn'
        ref={temeriaRef}
        onClick={() => {
          setTemeriaHovered(true)
        }}
      ></button>
      {temeriaHovered && <TemeriaModal closeModal={setTemeriaHovered} />}
    </div>
  )
}

function TemeriaRegionHistory1() {
  const [temeriaHovered, setTemeriaHovered] = useState(false)

  const temeriaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setTemeriaHovered(true)

    if (temeriaRef.current) {
      temeriaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (temeriaRef.current) {
        temeriaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [temeriaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn1'
        ref={temeriaRef}
        onClick={() => {
          setTemeriaHovered(true)
        }}
      ></button>
      {temeriaHovered && <TemeriaModal1 closeModal={setTemeriaHovered} />}
    </div>
  )
}

function TemeriaRegionHistory2() {
  const [temeriaHovered, setTemeriaHovered] = useState(false)

  const temeriaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setTemeriaHovered(true)

    if (temeriaRef.current) {
      temeriaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (temeriaRef.current) {
        temeriaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [temeriaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn2'
        ref={temeriaRef}
        onClick={() => {
          setTemeriaHovered(true)
        }}
      ></button>
      {temeriaHovered && <TemeriaModal2 closeModal={setTemeriaHovered} />}
    </div>
  )
}

function TemeriaRegionHistory3() {
  const [temeriaHovered, setTemeriaHovered] = useState(false)

  const temeriaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setTemeriaHovered(true)

    if (temeriaRef.current) {
      temeriaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (temeriaRef.current) {
        temeriaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [temeriaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn3'
        ref={temeriaRef}
        onClick={() => {
          setTemeriaHovered(true)
        }}
      ></button>
      {temeriaHovered && <TemeriaModal3 closeModal={setTemeriaHovered} />}
    </div>
  )
}

function TemeriaRegionHistory4() {
  const [temeriaHovered, setTemeriaHovered] = useState(false)

  const temeriaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setTemeriaHovered(true)

    if (temeriaRef.current) {
      temeriaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (temeriaRef.current) {
        temeriaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [temeriaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn4'
        ref={temeriaRef}
        onClick={() => {
          setTemeriaHovered(true)
        }}
      ></button>
      {temeriaHovered && <TemeriaModal4 closeModal={setTemeriaHovered} />}
    </div>
  )
}

function TemeriaRegionHistory5() {
  const [temeriaHovered, setTemeriaHovered] = useState(false)

  const temeriaRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setTemeriaHovered(true)

    if (temeriaRef.current) {
      temeriaRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (temeriaRef.current) {
        temeriaRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [temeriaRef])

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn5'
        ref={temeriaRef}
        onClick={() => {
          setTemeriaHovered(true)
        }}
      ></button>
      {temeriaHovered && <TemeriaModal5 closeModal={setTemeriaHovered} />}
    </div>
  )
}

export {
  TemeriaRegionHistory,
  TemeriaRegionHistory1,
  TemeriaRegionHistory2,
  TemeriaRegionHistory3,
  TemeriaRegionHistory4,
  TemeriaRegionHistory5
}
