import React from 'react'
import './NilfgaardModal.scss'
import { useEffect, useRef } from 'react'

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
            L'Empire Nilfgaardien est l'empire le plus puissant de l'histoire du
            monde connu. Il est situé dans la partie sud du Continent et se
            vante à la fois d'une économie florissante et d'une armée forte et
            bien entraînée avec des commandants talentueux.
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
            Il s'est principalement étendu par la conquête de pays étrangers,
            qui ont ensuite été transformés en provinces de l'Empire. Les
            habitants de l'Empire pensent que les vrais Nilfgaardiens ne sont
            que ceux nés au cœur de l'Empire, et non ceux nés dans les provinces
            conquises.
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
          <h2>L'Empire Nilfgaardien</h2>
        </div>
        <div className='body'>
          <p>
            Les provinces sont gouvernées soit par des intendants soit par des
            rois (dans les cas où un roi se rend volontairement, il conserve son
            trône mais est soumis à l'Empereur ou devenant simplement un
            vassal). L'empire s'est étendu au fil des ans, conquérant de
            nouvelles terres et allant jusqu'au nord de la rivière Yaruga
            pendant le règne de l'Empereur Emhyr var Emreis.
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
          <h2>Réputation</h2>
        </div>
        <div className='body'>
          <p>
            Dans les Royaumes du Nord, l'Empire représente l'ennemi suprême, de
            de nombreuses personnes libres du Nord exprimant une haine
            passionnée à son égard.
          </p>
        </div>
      </div>
    </div>
  )
}

export { NilfgaardModal, NilfgaardModal1, NilfgaardModal2, NilfgaardModal3 }
