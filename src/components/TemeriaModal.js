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
            Temeria is one of the northern kingdoms, lying south of the Pontar
            river. Its neighbors are Redania, Kerack, Kaedwen, Aedirn, Mahakam,
            Lower Sodden, and Cidaris. After the first and second wars, Temeria
            profited the most out of the defeat of Nilfgaard, expanding its
            borders as far south as Angren and Riverdell, reaching the Amell
            mountains. But the Kingdom also received a heavy blow regarding its
            economy, which forced it to buy goods from their southern neighbor.
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
          <h2>Foltests reign</h2>
        </div>
        <div className='body'>
          <p>
            In 1263, during the First Northern War, King Foltest of Temeria sent
            the Temerian Army to Lower Sodden, in an attempt to help defend
            against the invading Nilfgaardians. While the Nilfgaardians were
            defeated, Temeria received many refugees from nearby Cintra, after
            its capital was sacked.
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
          <h2>History</h2>
        </div>
        <div className='body'>
          <p>
            After the war, tensions grew with Redania, as well as Nilfgaard, and
            an influx of cheap Nilfgaardian goods started passing through
            Temeria, damaging the economy. King Vizimir II of Redania forced
            Novigrad into ius stapulae, blocking Temerian and Nilfgaardian goods
            from entering the city. In response, Foltest issued the law in
            Vizima and Gors Velen, in an attempt to re-stabilize the economy. In
            early 1267, on the brink of a Second Northern War, Foltest issued
            messages to his lords and vassals, instructing them to collect
            troops for the army, and to store supplies and fortify their
            castles, prepared for the possibility of sieges in the coming
            conflict.
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
          <h2>Society</h2>
        </div>
        <div className='body'>
          <p>
            Temerians are considered very polite and religious, but do not fully
            accept representatives of the so-called Elder Races. In general
            Temerias residents have a tendency for xenophobia, despite nonhumans
            living in their society.
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
            The most popular and most widespread religion in the kingdom is the
            worship of the goddess Melitele, though cults of the Prophet Lebioda
            and Kreve also have their followers. On Saovine, children burn
            figurines of Falka, to represent her defeated rebellion.
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
          <h2>Economy and trade</h2>
        </div>
        <div className='body'>
          <p>
            Temeria is one of the wealthiest realms in the North. Temerian
            economy is based on cultivating the production of various goods,
            trade, and extracting valuable mineral resources, from the mountains
            of Mahakam. The Temerian oren is one of the most used currencies in
            the world. Temeria also remains a land with highly developed
            agriculture, animal husbandry, and food industry. As Mahakam is
            officially part of the kingdom, Temeria has considerable interests
            in the extraction of precious metals and the production of
            high-quality weapons.
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
