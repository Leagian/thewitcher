import { useState } from 'react'
import { useEffect, useRef } from 'react'
import { Modal, Modal1, Modal2, Modal3, Modal4 } from '../components/Modal.js'
import './Modal.scss'

function RegionHistory() {
  const [cintraHovered, setCintraHovered] = useState(false)

  const cintraRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = () => setCintraHovered(true)

    // const handleMouseLeave = () => setCintraHovered(false)
    if (cintraRef.current) {
      cintraRef.current.addEventListener('mouseenter', handleMouseEnter)
      // cintraRef.current.addEventListener('mouseleave', handleMouseLeave)
    }
    return () => {
      if (cintraRef.current) {
        cintraRef.current.removeEventListener('mouseenter', handleMouseEnter)
        // cintraRef.current.removeEventListener('mouseleave', handleMouseLeave)
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
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='openModalBtn1'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <Modal1 closeModal={setOpenModal} />}
    </div>
  )
}

function RegionHistory2() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='openModalBtn2'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <Modal2 closeModal={setOpenModal} />}
    </div>
  )
}

function RegionHistory3() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='openModalBtn3'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <Modal3 closeModal={setOpenModal} />}
    </div>
  )
}

function RegionHistory4() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='openModalBtn4'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <Modal4 closeModal={setOpenModal} />}
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
