import React from 'react'
import './RedaniaModal.scss'
import { useEffect, useRef } from 'react'

function RedaniaModal({ closeModal }) {
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
      <div className='rModalContainer'>
        <div className='title'>
          <h2>Redania</h2>
        </div>
        <div className='body'>
          <p>
            Redania, nommée d'après Roeden, est un royaume riche, figure du
            commerce et de l'agriculture et l'un des quatre royaumes. La
            capitale de Redania est Tretogor. Oxenfurt est également importante.
            Elle abrite la plus grande université des Royaumes du Nord et la
            cité libre de Novigrad. Les voisins du royaume sont Kovir, Caingorn,
            Kaedwen, Aedirn et Temeria.
          </p>
        </div>
      </div>
    </div>
  )
}

function RedaniaModal1({ closeModal }) {
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
      <div className='rModalContainer1'>
        <div className='title'>
          <h2>Antiquite</h2>
        </div>
        <div className='body'>
          <p>
            Redania était originellement peuplée par les peuples Dauk et Wozgor
            avant le Premier Débarquement, plus précisément la région de Gelibol
            et la vallée de Nimnar, selon une classification de l'historien
            Grock.
          </p>
        </div>
      </div>
    </div>
  )
}

function RedaniaModal2({ closeModal }) {
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
      <div className='rModalContainer2'>
        <div className='title'>
          <h2>Les guerres du Nord</h2>
        </div>
        <div className='body'>
          <p>
            En 1263, au cours de la première guerre du Nord, l'armée royale de
            Redania, avec les forces d'Aedirn, de Temeria et de Kaedwen, fit
            face à l'armée Nilfgaardienne en invahissant la Sodden du Sud lors
            bataille de Sodden Hill. Les armées du nord, sous la direction
            unifiée du roi Vizimir II de Redania, réussirent à empêcher
            l'invasion Nilfgaardienne. Après la guerre, les tensions montèrent
            avec Temeria et le roi Vizimir II força Novigrad à ius stapulae,
            bloquant toutes les routes de marchandises et saisissant tous les
            produits de Nilfgaard ou de Temeria. Le roi Foltest de Temeria
            répondit en introduisant la même loi à Vizima et Gors Velen,
            bloquant tous les produits de Redania, ce qui commença à affecter
            l'économie car Redania ne disposait pas des ressources pour produire
            ses propres produits. Le roi Vizimir II de Redania fut tué pendant
            la deuxième guerre Nilfgaardienne. Au cours de l'interrègne, le pays
            fut gouverné par un conseil de régence dirigé par Sigismund
            Dijkstra, chef du renseignement redanien, et Philippa Eilhart,
            cheffe du logis des sorcières. Par la suite, le temps venu, le pays
            passa aux mains de Radovid V, connu sous le nom de L'Austère.
          </p>
        </div>
      </div>
    </div>
  )
}

function RedaniaModal3({ closeModal }) {
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
      <div className='rModalContainer3'>
        <div className='title'>
          <h2>Societe</h2>
        </div>
        <div className='body'>
          <p>
            Typique de la structure sociale de ce pays - le culte de la noblesse
            est populaire en Redania, et les strates sociales les plus elevées
            possèdent plus de privilièges ici que dans aucun des royaumes
            voisins. De grandes différences de richesses sont observées au sein
            de la noblesse, mais la loi Redanienne se soucie plus du droit de
            naissance que du droit de propriété, faisant d'un mendiant bien né
            l'égal du magnat le plus riche. Ceux de haute naisance possedant de
            grandes richesses tirent principalement profit du commerce des
            céréales et de l'élevage de chevaux de race. En conséquence de la
            position privilégiée de la noblesse, les gens du peuple sont traités
            pire ici que dans n'importe quel État voisin, et seule la poigne de
            fer du Roi les empêche de se révolter. Le gouvernement de Redania
            est également fortement influencé par les sorcières.
          </p>
        </div>
      </div>
    </div>
  )
}

function RedaniaModal4({ closeModal }) {
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
      <div className='rModalContainer4'>
        <div className='title'>
          <h2>La culture</h2>
        </div>
        <div className='body'>
          <p>
            Lors de Saovine, les enfants Redaniens brûlent des figurines de
            Falka dans des feux de joie, en mémoire de sa célèbre rébellion. Les
            coursiers Redaniens sont inégalés, ce qui fait de la cavalerie
            Redanienne l'une des meilleures au monde, et avec la noblesse du
            pays dans ses rangs, elle est le coeur de l'Armée Royale Redanienne.
            Depuis des millénaires, Redania est en guerre de coutumes avec
            Temeria, sa principale rivale au Nord. Redania possède le meilleur
            réseau d'espionnage au monde, et au cours de l'Histoire, ils ont
            infiltré nombre d'organisations rivales.
          </p>
        </div>
      </div>
    </div>
  )
}

function RedaniaModal5({ closeModal }) {
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
      <div className='rModalContainer5'>
        <div className='title'>
          <h2>Economie et commerce</h2>
        </div>
        <div className='body'>
          <p>
            Le Royaume tire d'énormes profits du commerce avec Novigrad ainsi
            que des exportations de céréales. On peut dire que c'est le grenier
            de tout le continent, et même d'autres parties du monde. En effet,
            le paysage dominant de Redania est immense, vallonné de champs de
            céréales. Au XIIIe siècle, l'économie de l'État fut gravement
            menacée, en raison du flux de marchandises bon marché en provenance
            d'autres pays, ce qui constituait une concurrence sérieuse pour les
            artisans locaux, compte tenu de l'absence de manufacture.
          </p>
        </div>
      </div>
    </div>
  )
}

export {
  RedaniaModal,
  RedaniaModal1,
  RedaniaModal2,
  RedaniaModal3,
  RedaniaModal4,
  RedaniaModal5
}
