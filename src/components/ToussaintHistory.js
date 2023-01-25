import { useState } from 'react'
import { useEffect, useRef } from 'react'
import {
  ToussaintModal,
  ToussaintModal1,
  ToussaintModal2,
  ToussaintModal3,
  ToussaintModal4,
  ToussaintModal5,
  ToussaintModal6,
  ToussaintModal7
} from '../components/ToussaintModal.js'
import './ToussaintModal.scss'

function ToussaintRegionHistory() {
  const [toussaintHovered, setToussaintHovered] = useState(false)

  const toussaintRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setToussaintHovered(true)

    if (toussaintRef.current) {
      toussaintRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (toussaintRef.current) {
        toussaintRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [toussaintRef])

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn'
        ref={toussaintRef}
        onClick={() => {
          setToussaintHovered(true)
        }}
      ></button>
      {toussaintHovered && <ToussaintModal closeModal={setToussaintHovered} />}
    </div>
  )
}

function ToussaintRegionHistory1() {
  const [toussaintHovered, setToussaintHovered] = useState(false)

  const toussaintRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setToussaintHovered(true)

    if (toussaintRef.current) {
      toussaintRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (toussaintRef.current) {
        toussaintRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [toussaintRef])

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn1'
        ref={toussaintRef}
        onClick={() => {
          setToussaintHovered(true)
        }}
      ></button>
      {toussaintHovered && <ToussaintModal1 closeModal={setToussaintHovered} />}
    </div>
  )
}

function ToussaintRegionHistory2() {
  const [toussaintHovered, setToussaintHovered] = useState(false)

  const toussaintRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setToussaintHovered(true)

    if (toussaintRef.current) {
      toussaintRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (toussaintRef.current) {
        toussaintRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [toussaintRef])

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn2'
        ref={toussaintRef}
        onClick={() => {
          setToussaintHovered(true)
        }}
      ></button>
      {toussaintHovered && <ToussaintModal2 closeModal={setToussaintHovered} />}
    </div>
  )
}

function ToussaintRegionHistory3() {
  const [toussaintHovered, setToussaintHovered] = useState(false)

  const toussaintRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setToussaintHovered(true)

    if (toussaintRef.current) {
      toussaintRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (toussaintRef.current) {
        toussaintRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [toussaintRef])

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn3'
        ref={toussaintRef}
        onClick={() => {
          setToussaintHovered(true)
        }}
      ></button>
      {toussaintHovered && <ToussaintModal3 closeModal={setToussaintHovered} />}
    </div>
  )
}

function ToussaintRegionHistory4() {
  const [toussaintHovered, setToussaintHovered] = useState(false)

  const toussaintRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setToussaintHovered(true)

    if (toussaintRef.current) {
      toussaintRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (toussaintRef.current) {
        toussaintRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [toussaintRef])

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn4'
        ref={toussaintRef}
        onClick={() => {
          setToussaintHovered(true)
        }}
      ></button>
      {toussaintHovered && <ToussaintModal4 closeModal={setToussaintHovered} />}
    </div>
  )
}

function ToussaintRegionHistory5() {
  const [toussaintHovered, setToussaintHovered] = useState(false)

  const toussaintRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setToussaintHovered(true)

    if (toussaintRef.current) {
      toussaintRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (toussaintRef.current) {
        toussaintRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [toussaintRef])

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn5'
        ref={toussaintRef}
        onClick={() => {
          setToussaintHovered(true)
        }}
      ></button>
      {toussaintHovered && <ToussaintModal5 closeModal={setToussaintHovered} />}
    </div>
  )
}

function ToussaintRegionHistory6() {
  const [toussaintHovered, setToussaintHovered] = useState(false)

  const toussaintRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setToussaintHovered(true)

    if (toussaintRef.current) {
      toussaintRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (toussaintRef.current) {
        toussaintRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [toussaintRef])

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn6'
        ref={toussaintRef}
        onClick={() => {
          setToussaintHovered(true)
        }}
      ></button>
      {toussaintHovered && <ToussaintModal6 closeModal={setToussaintHovered} />}
    </div>
  )
}

function ToussaintRegionHistory7() {
  const [toussaintHovered, setToussaintHovered] = useState(false)

  const toussaintRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setToussaintHovered(true)

    if (toussaintRef.current) {
      toussaintRef.current.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (toussaintRef.current) {
        toussaintRef.current.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [toussaintRef])

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn7'
        ref={toussaintRef}
        onClick={() => {
          setToussaintHovered(true)
        }}
      ></button>
      {toussaintHovered && <ToussaintModal7 closeModal={setToussaintHovered} />}
    </div>
  )
}

export {
  ToussaintRegionHistory,
  ToussaintRegionHistory1,
  ToussaintRegionHistory2,
  ToussaintRegionHistory3,
  ToussaintRegionHistory4,
  ToussaintRegionHistory5,
  ToussaintRegionHistory6,
  ToussaintRegionHistory7
}
