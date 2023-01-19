import { useState } from 'react'
import {
  KaedwenModal,
  KaedwenModal1,
  KaedwenModal2,
  KaedwenModal3
} from '../components/KaedwenModal.js'
import './KaedwenModal.scss'

function KaedwenRegionHistory() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='kOpenModalBtn'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <KaedwenModal closeModal={setOpenModal} />}
    </div>
  )
}

function KaedwenRegionHistory1() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='kOpenModalBtn1'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <KaedwenModal1 closeModal={setOpenModal} />}
    </div>
  )
}

function KaedwenRegionHistory2() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='kOpenModalBtn2'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <KaedwenModal2 closeModal={setOpenModal} />}
    </div>
  )
}

function KaedwenRegionHistory3() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='kOpenModalBtn3'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <KaedwenModal3 closeModal={setOpenModal} />}
    </div>
  )
}

export {
  KaedwenRegionHistory,
  KaedwenRegionHistory1,
  KaedwenRegionHistory2,
  KaedwenRegionHistory3
}
