import React from 'react'
import './NilfgaardModal.scss'
import { useState, useEffect, useRef } from 'react'

function NilfgaardModal({ closeModal }) {
  const bubbleRef = useRef(null)

  useEffect(() => {
    const handleMouseBubble = () => closeModal()
    if (bubbleRef.current && closeModal) {
      bubbleRef.current.addEventListener('mouseleave', handleMouseBubble)
    }
    return () => {
      if (bubbleRef.current) {
        bubbleRef.current.removeEventListener('mouseleave', handleMouseBubble)
      }
    }
  }, [bubbleRef, closeModal])

  return (
    <div className='modalBackground' ref={bubbleRef}>
      <div className='nModalContainer'>
        <div className='title'>
          <h2>Nilfgaard</h2>
        </div>
        <div className='body'>
          <p>
            The Nilfgaardian Empire is the most powerful empire in the history
            of the known world. It is located in the southern part of the
            Continent and boasts both a thriving economy and a strong,
            well-trained army with talented commanders.
          </p>
        </div>
      </div>
    </div>
  )
}

function NilfgaardModal1({ closeModal }) {
  const bubbleRef = useRef(null)

  useEffect(() => {
    const handleMouseBubble = () => closeModal()
    if (bubbleRef.current && closeModal) {
      bubbleRef.current.addEventListener('mouseleave', handleMouseBubble)
    }
    return () => {
      if (bubbleRef.current) {
        bubbleRef.current.removeEventListener('mouseleave', handleMouseBubble)
      }
    }
  }, [bubbleRef, closeModal])

  return (
    <div className='modalBackground' ref={bubbleRef}>
      <div className='nModalContainer1'>
        <div className='title'>
          <h2>Nilfgaard</h2>
        </div>
        <div className='body'>
          <p>
            It has expanded mostly through the conquest of foreign countries,
            which were then turned into provinces of the Empire. The Empires
            inhabitants believe that real Nilfgaardians are only those born in
            the heart of the Empire, and not those born in the conquered
            provinces.
          </p>
        </div>
      </div>
    </div>
  )
}

function NilfgaardModal2({ closeModal }) {
  const bubbleRef = useRef(null)

  useEffect(() => {
    const handleMouseBubble = () => closeModal()
    if (bubbleRef.current && closeModal) {
      bubbleRef.current.addEventListener('mouseleave', handleMouseBubble)
    }
    return () => {
      if (bubbleRef.current) {
        bubbleRef.current.removeEventListener('mouseleave', handleMouseBubble)
      }
    }
  }, [bubbleRef, closeModal])

  return (
    <div className='modalBackground' ref={bubbleRef}>
      <div className='nModalContainer2'>
        <div className='title'>
          <h2>Nilfgaardian Empire</h2>
        </div>
        <div className='body'>
          <p>
            The provinces are ruled by either stewards or kings (in cases in
            which a king willingly surrenders, he retains his throne but is
            subject to the Emperor or just a vassal). The empire has expanded
            throughout the years, conquering new lands and going as far to the
            north as the Yaruga River during the reign of Emperor Emhyr var
            Emreis.
          </p>
        </div>
      </div>
    </div>
  )
}

function NilfgaardModal3({ closeModal }) {
  const bubbleRef = useRef(null)

  useEffect(() => {
    const handleMouseBubble = () => closeModal()
    if (bubbleRef.current && closeModal) {
      bubbleRef.current.addEventListener('mouseleave', handleMouseBubble)
    }
    return () => {
      if (bubbleRef.current) {
        bubbleRef.current.removeEventListener('mouseleave', handleMouseBubble)
      }
    }
  }, [bubbleRef, closeModal])

  return (
    <div className='modalBackground' ref={bubbleRef}>
      <div className='nModalContainer3'>
        <div className='title'>
          <h2>Reputation</h2>
        </div>
        <div className='body'>
          <p>
            In the Northern Kingdoms, the Empire is portrayed as an overarching
            antagonist, with many free people of the North expressing hatred
            towards it with passion.
          </p>
        </div>
      </div>
    </div>
  )
}

export { NilfgaardModal, NilfgaardModal1, NilfgaardModal2, NilfgaardModal3 }
