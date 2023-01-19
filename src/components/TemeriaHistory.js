import { useState } from 'react'
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
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <TemeriaModal closeModal={setOpenModal} />}
    </div>
  )
}

function TemeriaRegionHistory1() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn1'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <TemeriaModal1 closeModal={setOpenModal} />}
    </div>
  )
}

function TemeriaRegionHistory2() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn2'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <TemeriaModal2 closeModal={setOpenModal} />}
    </div>
  )
}

function TemeriaRegionHistory3() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn3'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <TemeriaModal3 closeModal={setOpenModal} />}
    </div>
  )
}

function TemeriaRegionHistory4() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn4'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <TemeriaModal4 closeModal={setOpenModal} />}
    </div>
  )
}

function TemeriaRegionHistory5() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='tOpenModalBtn5'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <TemeriaModal5 closeModal={setOpenModal} />}
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
