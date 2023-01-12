import { useState } from 'react'
import { Modal, Modal1, Modal2, Modal3, Modal4 } from '../components/Modal.js'
import './Modal.scss'

function RegionHistory() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='openModalBtn'
        onClick={() => {
          setOpenModal(true)
        }}
      >
        Open
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
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
      >
        Open
      </button>
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
      >
        Open
      </button>
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
      >
        Open
      </button>
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
      >
        Open
      </button>
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
