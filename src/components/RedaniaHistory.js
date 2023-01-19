import { useState } from 'react'
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
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <RedaniaModal closeModal={setOpenModal} />}
    </div>
  )
}

function RedaniaRegionHistory1() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn1'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <RedaniaModal1 closeModal={setOpenModal} />}
    </div>
  )
}

function RedaniaRegionHistory2() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn2'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <RedaniaModal2 closeModal={setOpenModal} />}
    </div>
  )
}

function RedaniaRegionHistory3() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn3'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <RedaniaModal3 closeModal={setOpenModal} />}
    </div>
  )
}

function RedaniaRegionHistory4() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn4'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <RedaniaModal4 closeModal={setOpenModal} />}
    </div>
  )
}

function RedaniaRegionHistory5() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='rOpenModalBtn5'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <RedaniaModal5 closeModal={setOpenModal} />}
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
