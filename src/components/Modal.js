import React from 'react'
import './Modal.scss'
import { useEffect, useRef } from 'react'

function Modal({ closeModal }) {
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
      <div className='modalContainer'>
        <div className='title'>
          <h2>Cintra</h2>
        </div>
        <div className='body'>
          <p>
            Cintra est l'un des royaumes du Nord, situé au sud de Sodden,
            Riverdell et de la grande rivière Yaruga.
          </p>
        </div>
      </div>
    </div>
  )
}

function Modal1({ closeModal }) {
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
      <div className='modalContainer1'>
        <div className='title'>
          <h2>Antiquité</h2>
        </div>
        <div className='body'>
          <p>
            Autrefois connue sous le nom de cité elfique de Xintrea, Cintra a
            été construite sur ses ruines après l'expansion orientale des
            humains il y a environ cinq cents ans, et l'abandon de la ville par
            les elfes.
          </p>
        </div>
      </div>
    </div>
  )
}

function Modal2({ closeModal }) {
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
      <div className='modalContainer2'>
        <div className='title'>
          <h2>Les guerres du Nord</h2>
        </div>
        <div className='body'>
          <p>
            En 1263, après l'expansion continue de l'Empire Nilfgaardien aux
            montagnes Amell, l'empereur Emhyr var Emreis entama une invasion à
            grande échelle du Nord, commençant par le royaume de Cintra. L'Armée
            Nilfgaardienne traversa les escaliers de Marnadal et écrasa l'Armée
            Cintraine à l'entrée du col montagneux, ce qui devint plus tard
            connu sous le nom de la bataille de Marnadal.
          </p>
        </div>
      </div>
    </div>
  )
}

function Modal3({ closeModal }) {
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
      <div className='modalContainer3'>
        <div className='title'>
          <h2>Les guerres du Nord</h2>
        </div>
        <div className='body'>
          <p>
            Ils continuèrent vers le nord et massacrèrent la capitale fortifiée
            du royaume, tuant presque toute la famille royale, la reine Calanthe
            décidant de se suicider plutôt que d'être capturée. De nombreux
            habitants de la capitale devinrent sans abri et se mirent à fuir
            vers les villes voisines de Verden, Temeria, Brugge et Skellige.
            avoir marché vers le nord et avoir été vaincus à la bataille de
            Sodden Hill, l'Armée Nilfgaardienne fit demi-tour vers le sud et
            pris le contrôle des terres occupées de Cintra et du nord de Sodden.
          </p>
        </div>
      </div>
    </div>
  )
}

function Modal4({ closeModal }) {
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
      <div className='modalContainer4'>
        <div className='title'>
          <h2>Coutumes</h2>
        </div>
        <div className='body'>
          <p>
            Malgré la tradition du royaume selon laquelle les hommes mariés
            héritent automatiquement du trône si le roi précédent est mort en
            dépit d'une reine en vie, Cintra, comme le reste des royaumes du
            sud, élève les garçons et les filles comme le font les elfes : tous
            sont entraînés à se battre, monter à cheval et aller à la chasse dès
            chasse dès leur enfance, sans distinction de genre.
          </p>
        </div>
      </div>
    </div>
  )
}

export { Modal, Modal1, Modal2, Modal3, Modal4 }
