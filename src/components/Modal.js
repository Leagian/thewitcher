import React from 'react'
import './Modal.scss'

function Modal({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button
            onClick={() => {
              closeModal(false)
            }}
          >
            X
          </button>
        </div>
        <div className='title'>
          <h2>Cintra</h2>
        </div>
        <div className='body'>
          <p>
            Cintra is one of the Northern Kingdoms, located south of Sodden,
            Riverdell, and the great river Yaruga.
          </p>
        </div>
      </div>
    </div>
  )
}

function Modal1({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer1'>
        <div className='titleCloseBtn'>
          <button
            onClick={() => {
              closeModal(false)
            }}
          >
            X
          </button>
        </div>
        <div className='title'>
          <h2>Ancient Times</h2>
        </div>
        <div className='body'>
          <p>
            Once known as the elven city of Xintrea, Cintra was built on its
            ruins after the eastern expansion of humans approximately five
            hundred years ago, and the abandonment of the city by the elves.
          </p>
        </div>
      </div>
    </div>
  )
}

function Modal2({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer2'>
        <div className='titleCloseBtn'>
          <button
            onClick={() => {
              closeModal(false)
            }}
          >
            X
          </button>
        </div>
        <div className='title'>
          <h2>Northern Wars</h2>
        </div>
        <div className='body'>
          <p>
            In 1263, after the continued expansion of the Nilfgaardian Empire to
            the Amell Mountains, Emperor Emhyr var Emreis began a full scale
            invasion of the North, beginning with the kingdom of Cintra. The
            Nilfgaardian Army crossed the Marnadal Stairs and crushed the
            Cintran Army at the mouth of the mountain pass, which became later
            known as the Battle of Marnadal.
          </p>
        </div>
      </div>
    </div>
  )
}

function Modal3({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer3'>
        <div className='titleCloseBtn'>
          <button
            onClick={() => {
              closeModal(false)
            }}
          >
            X
          </button>
        </div>
        <div className='title'>
          <h2>Northern Wars</h2>
        </div>
        <div className='body'>
          <p>
            They continued north and slaughtered the kingdoms fortified capital,
            capital, killing nearly the entire royal family, with Queen Calanthe
            committing suicide rather than be captured. Many of the capitals
            residents were left homeless and fled to nearby Verden, Temeria,
            Brugge, and Skellige. After marching north and being defeated at the
            the Battle of Sodden Hill, the Nilfgaardian Army marched south again
            and took control of the occupied lands of Cintra and Upper Sodden.
          </p>
        </div>
      </div>
    </div>
  )
}

function Modal4({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer4'>
        <div className='titleCloseBtn'>
          <button
            onClick={() => {
              closeModal(false)
            }}
          >
            X
          </button>
        </div>
        <div className='title'>
          <h2>Costums</h2>
        </div>
        <div className='body'>
          <p>
            Despite the kingdoms tradition of married-in men automatically
            inheriting the throne if the previous king is dead despite a living
            queen, Cintra, like the rest of the southern kingdoms, raises boys
            and girls like the elves do: they are all taught how to fight, ride
            horse, and go hunting from the time they are children, regardless of
            gender.
          </p>
        </div>
      </div>
    </div>
  )
}

export { Modal, Modal1, Modal2, Modal3, Modal4 }
