import { useState } from 'react'
import {
  NilfgaardModal,
  NilfgaardModal1,
  NilfgaardModal2,
  NilfgaardModal3
} from '../components/NilfgaardModal.js'
import './NilfgaardModal.scss'

function NilfgaardRegionHistory() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='nOpenModalBtn'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <NilfgaardModal closeModal={setOpenModal} />}
    </div>
  )
}

function NilfgaardRegionHistory1() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='nOpenModalBtn1'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <NilfgaardModal1 closeModal={setOpenModal} />}
    </div>
  )
}

function NilfgaardRegionHistory2() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='nOpenModalBtn2'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <NilfgaardModal2 closeModal={setOpenModal} />}
    </div>
  )
}

function NilfgaardRegionHistory3() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='RegionHistory'>
      <button
        className='nOpenModalBtn3'
        onClick={() => {
          setOpenModal(true)
        }}
      ></button>
      {openModal && <NilfgaardModal3 closeModal={setOpenModal} />}
    </div>
  )
}

export {
  NilfgaardRegionHistory,
  NilfgaardRegionHistory1,
  NilfgaardRegionHistory2,
  NilfgaardRegionHistory3
}
