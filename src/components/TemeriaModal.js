import React from 'react'
import './TemeriaModal.scss'
import { useEffect, useRef } from 'react'

function TemeriaModal({ closeModal }) {
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
      <div className='tModalContainer'>
        <div className='title'>
          <h2>Temeria</h2>
        </div>
        <div className='body'>
          <p>
            Temeria est l'un des royaumes du nord, situé au sud du fleuve
            Pontar. Ses voisins sont Redania, Kerack, Kaedwen, Aedirn, Mahakam,
            Lower Sodden et Cidaris. Après les première et seconde guerres,
            Temeria est le territoire qui a le plus profité de la défaite de
            Nilfgaard, élargissant ses frontières jusqu'au sud qu'Angren et
            Riverdell, atteignant les montagnes d'Amell. Mais le Royaume a
            également essuyé un revers économique, ce qui l'a obligé à acheter
            des marchandises à son voisin du sud.
          </p>
        </div>
      </div>
    </div>
  )
}

function TemeriaModal1({ closeModal }) {
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
      <div className='tModalContainer1'>
        <div className='title'>
          <h2>le règne de Foltest</h2>
        </div>
        <div className='body'>
          <p>
            En 1263, pendant la Première Guerre du Nord, le roi Foltest de
            Temeria envoya son armée en Sodden du Sud pour tenter d'aider la
            défense contre les envahisseurs Nilfgaardiens. Après la défaite de
            Nilfgaard, Temeria a accueilli de nombreux réfugiés de Cintra,après
            la mise à sac de sa capitale.
          </p>
        </div>
      </div>
    </div>
  )
}

function TemeriaModal2({ closeModal }) {
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
      <div className='tModalContainer2'>
        <div className='title'>
          <h2>Histoire</h2>
        </div>
        <div className='body'>
          <p>
            Après la guerre, les tensions grandirent avec Redania, ainsi qu'avec
            Nilfgaard, tandis qu'un afflux de produits nilfgaardiens bon marché
            commençait à traverser Temeria, endommageant l'économie. Le roi
            Vizimir II de Redania força Novigrad au ius stapulae , empêchant les
            marchandises témériennes et nilfgaardiennes d'entrer dans la ville.
            En réponse, Foltest publia la même loi à Wyzima et Gors Velen, dans
            une tentative de stabiliser l'économie. Début 1267, au bord d'une
            Seconde Guerre du Nord, Foltest, préparé à la possibilité d'un siège
            lors du conflit à venir, envoya des messages à ses seigneurs et
            vassaux, leur ordonnant de rassembler des troupes pour l'armée,et
            également dans le but de stocker des fournitures et de fortifier
            leur château.
          </p>
        </div>
      </div>
    </div>
  )
}

function TemeriaModal3({ closeModal }) {
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
      <div className='tModalContainer3'>
        <div className='title'>
          <h2>Société</h2>
        </div>
        <div className='body'>
          <p>
            Les Témériens sont considérés comme très polis et religieux, mais
            n'acceptent pas entièrement les représentants des "Races Anciennes".
            En général, Les habitants de Temeria ont une tendance à la
            xénophobie, malgré le fait que des non-humains vivent dans leur
            société.
          </p>
        </div>
      </div>
    </div>
  )
}

function TemeriaModal4({ closeModal }) {
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
      <div className='tModalContainer4'>
        <div className='title'>
          <h2>Religion</h2>
        </div>
        <div className='body'>
          <p>
            La religion la plus populaire et la plus répandue dans le royaume
            est le culte de la déesse Melitele, bien que les cultes des
            prophètes Lebioda et Kreve ont aussi leurs partisans. Sur Saovine,
            les enfants brûlent des figurines de Falka, pour représenter sa
            rébellion vaincue.
          </p>
        </div>
      </div>
    </div>
  )
}

function TemeriaModal5({ closeModal }) {
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
      <div className='tModalContainer5'>
        <div className='title'>
          <h2>Économie et commerce</h2>
        </div>
        <div className='body'>
          <p>
            Temeria est l'un des royaumes les plus riches du Nord. l'économie
            Temerienne est basée sur la culture de la production de divers
            biens, le commerce et l'extraction de précieuses ressources
            minérales des montagnes de Mahakam. L'oren de Temeria est l'une des
            monnaies les plus utilisées dans le monde. Temeria reste également
            une terre avec une agriculture, des élevages et une industrie
            alimentaire hautement développés. Comme Mahakam fait officiellement
            partie du royaume, Temeria a des intérêts considérables dans
            l'extraction de métaux précieux et la production d'armes de haute
            qualité.
          </p>
        </div>
      </div>
    </div>
  )
}

export {
  TemeriaModal,
  TemeriaModal1,
  TemeriaModal2,
  TemeriaModal3,
  TemeriaModal4,
  TemeriaModal5
}
