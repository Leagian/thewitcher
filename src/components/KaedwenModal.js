import React from 'react'
import './KaedwenModal.scss'
import { useEffect, useRef } from 'react'

function KaedwenModal({ closeModal }) {
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
      <div className='kModalContainer'>
        <div className='title'>
          <h2>Kaedwen</h2>
        </div>
        <div className='body'>
          <p>
            Kaedwen (de la langue ancienne Caed Gwen) est le plus grand des
            royaumes du Nord (et le deuxième plus grand pays sur le Continent, à
            côté de Nilfgaard). Ses principales villes sont sa capitale, Ard
            Carraigh, et la ville de Ban Ard, célèbre pour son école de
            sorcellerie. Il est également connu pour son climat froid et
            impitoyable, ainsi que pour les nombreuses forêts à l'intérieur de
            ses frontières.
          </p>
        </div>
      </div>
    </div>
  )
}

function KaedwenModal1({ closeModal }) {
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
      <div className='kModalContainer1'>
        <div className='title'>
          <h2>Histoire</h2>
        </div>
        <div className='body'>
          <p>
            Le roi Henselt se disputait fréquemment avec Aedirn, le territoire
            voisin, principalement à propos de la propriété de la vallée du
            Pontar, qui appartenait autrefois aux Kaedweniens. Kaedwen partage
            également des frontières avec les royaumes de Redania et Caingorn,
            ainsi qu'une partie des Montagnes Ardentes, des montagnes Kestrel et
            des Mountagnes Bleues, qui traversent le royaume. La forteresse des
            sorceleurs de Kaer Morhen est située sur les sommets des Mountagnes
            Bleues, et plus au sud se trouve le pays des Elfes Libres, une
            enclave établie par des elfes cherchant refugiés après des siècles
            de guerre avec humains.
          </p>
        </div>
      </div>
    </div>
  )
}

function KaedwenModal2({ closeModal }) {
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
      <div className='kModalContainer2'>
        <div className='title'>
          <h2>Histoire</h2>
        </div>
        <div className='body'>
          <p>
            Plus tard, le temps a suffisamment changé pour que les régions du
            nord, comme Talgar, Caingorn et Kaedwen, ne sont plus adaptés à la
            culture de certains types de produits en raison du climat plus
            froid. Particulièrement, Kaedwen n'a plus la capacité de cultiver la
            vigne et n'a donc plus d'industrie viticole.
          </p>
        </div>
      </div>
    </div>
  )
}

function KaedwenModal3({ closeModal }) {
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
      <div className='kModalContainer3'>
        <div className='title'>
          <h2>Les guerres du Nord</h2>
        </div>
        <div className='body'>
          <p>
            Sous le règne du roi Henselt, pendant la Première Guerre du Nord en
            1263, l'armée kaedwenienne marcha vers le sud pour faire face à
            l'invasion de l'Armée Nilfgaardienne. Bien qu'ils aient réussi, de
            nombreux soldats ont été tues dans la bataille, et Kaedwen a été
            laissé partiellement sans défense au profit de la Scoiatael
            nouvellement établie, qui a continuellement attaqué les forts
            Kaedweniens et les régiments sur la route, comme celui des Hêtres.
            En 1267, après la rencontre des dirigeants du nord à Hagge, Henselt
            a formé une offensive contre la Scoiatael, entraînant des pogroms
            contre les non-humains, devienus par la suite monnaie courante dans
            le royaume.
          </p>
        </div>
      </div>
    </div>
  )
}

export { KaedwenModal, KaedwenModal1, KaedwenModal2, KaedwenModal3 }
