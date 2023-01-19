import { useState } from 'react'
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
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <ToussaintModal closeModal={setOpenModal} />}
    </div>
  )
}

function ToussaintRegionHistory1() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn1'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <ToussaintModal1 closeModal={setOpenModal} />}
    </div>
  )
}

function ToussaintRegionHistory2() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn2'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <ToussaintModal2 closeModal={setOpenModal} />}
    </div>
  )
}

function ToussaintRegionHistory3() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn3'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <ToussaintModal3 closeModal={setOpenModal} />}
    </div>
  )
}

function ToussaintRegionHistory4() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn4'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <ToussaintModal4 closeModal={setOpenModal} />}
    </div>
  )
}

function ToussaintRegionHistory5() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn5'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <ToussaintModal5 closeModal={setOpenModal} />}
    </div>
  )
}

function ToussaintRegionHistory6() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn6'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <ToussaintModal6 closeModal={setOpenModal} />}
    </div>
  )
}

function ToussaintRegionHistory7() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='toOpenModalBtn7'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <ToussaintModal7 closeModal={setOpenModal} />}
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
