import { useState } from 'react'
import { useEffect, useRef } from 'react'
import { Modal, Modal1, Modal2, Modal3, Modal4 } from '../components/Modal.js'
import './Modal.scss'

function RegionHistory() {
  const [cintraHovered, setCintraHovered] = useState(false)

  const cintraRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setCintraHovered(true)

    if (cintraRef.current) {
      cintraRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (cintraRef.current) {
        cintraRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [cintraRef])

  return (
    <div className='RegionHistory'>
      <button
        className='openModalBtn'
        ref={cintraRef}
        onClick={() => {
          setCintraHovered(true)
        }}
      ></button>
      {cintraHovered && <Modal closeModal={setCintraHovered} />}
    </div>
  )
}

function RegionHistory1() {
  const [cintraHovered, setCintraHovered] = useState(false)

  const cintraRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setCintraHovered(true)

    if (cintraRef.current) {
      cintraRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (cintraRef.current) {
        cintraRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [cintraRef])

  return (
    <div className='RegionHistory'>
      <button
        className='openModalBtn1'
        ref={cintraRef}
        onClick={() => {
          setCintraHovered(true)
        }}
      ></button>
      {cintraHovered && <Modal1 closeModal={setCintraHovered} />}
    </div>
  )
}

function RegionHistory2() {
  const [cintraHovered, setCintraHovered] = useState(false)

  const cintraRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setCintraHovered(true)

    if (cintraRef.current) {
      cintraRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (cintraRef.current) {
        cintraRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [cintraRef])

  return (
    <div className='RegionHistory'>
      <button
        className='openModalBtn2'
        ref={cintraRef}
        onClick={() => {
          setCintraHovered(true)
        }}
      ></button>
      {cintraHovered && <Modal2 closeModal={setCintraHovered} />}
    </div>
  )
}

function RegionHistory3() {
  const [cintraHovered, setCintraHovered] = useState(false)

  const cintraRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setCintraHovered(true)

    if (cintraRef.current) {
      cintraRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (cintraRef.current) {
        cintraRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [cintraRef])

  return (
    <div className='RegionHistory'>
      <button
        className='openModalBtn3'
        ref={cintraRef}
        onClick={() => {
          setCintraHovered(true)
        }}
      ></button>
      {cintraHovered && <Modal3 closeModal={setCintraHovered} />}
    </div>
  )
}

function RegionHistory4() {
  const [cintraHovered, setCintraHovered] = useState(false)

  const cintraRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setCintraHovered(true)

    if (cintraRef.current) {
      cintraRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (cintraRef.current) {
        cintraRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [cintraRef])

  return (
    <div className='RegionHistory'>
      <button
        className='openModalBtn4'
        ref={cintraRef}
        onClick={() => {
          setCintraHovered(true)
        }}
      ></button>
      {cintraHovered && <Modal4 closeModal={setCintraHovered} />}
    </div>
  )
}

export {
  RegionHistory,
  RegionHistory1,
  RegionHistory2,
  RegionHistory3,
  RegionHistory4
}
