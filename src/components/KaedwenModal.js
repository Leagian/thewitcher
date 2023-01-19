import React from 'react'
import './KaedwenModal.scss'

function KaedwenModal({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='kModalContainer'>
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
          <h2>Kaedwen</h2>
        </div>
        <div className='body'>
          <p>
            Kaedwen (from Elder Speech Caed Gwen translated as White Forest) is
            the largest of the Northern Kingdoms (and the second largest country
            in the Continent, next to Nilfgaard). Its main cities are its
            capital, Ard Carraigh, and the city of Ban Ard, famous for its
            sorcery school. It is also known for its cold and unforgiving
            climate, along with the many forests within its borders.
          </p>
        </div>
      </div>
    </div>
  )
}

function KaedwenModal1({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='kModalContainer1'>
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
          <h2>History</h2>
        </div>
        <div className='body'>
          <p>
            King Henselt frequently quarreled with neighboring Aedirn, mostly
            over the ownership of the Pontar Valley which once belonged to the
            Kaedwenians. Kaedwen also shares borders with the kingdoms of
            Redania and Caingorn; and portions of the Fiery Mountains, the
            Kestrel Mountains and the Blue Mountains run through the kingdom.
            The witchers fortress of Kaer Morhen is located amidst the peaks of
            the Blue Mountains, and further south lies the land of the Free
            Elves, an enclave established by elves seeking refuge from centuries
            of warring with humans.
          </p>
        </div>
      </div>
    </div>
  )
}

function KaedwenModal2({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='kModalContainer2'>
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
          <h2>History</h2>
        </div>
        <div className='body'>
          <p>
            In the far future, the weather changed enough that northern regions,
            like Talgar, Caingorn, and Kaedwen, are no longer suitable to grow
            certain types of produce due to the colder climate. In particular,
            Kaedwen no longer has the capability to grow grapevines and thus no
            longer has a wine industry.
          </p>
        </div>
      </div>
    </div>
  )
}

function KaedwenModal3({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='kModalContainer3'>
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
            During the reign of King Henselt, during the First Northern War in
            1263, the Kaedwenian Army marched south to face the invading
            Nilfgaardian Army. While successful, many soldiers were lost in
            battle, and concurrently Kaedwen was left partially undefended to
            the newly established Scoiatael, who constantly attacked Kaedwenian
            forts and regiments on the road, such as Beeches. In 1267, after the
            northern rulers meeting at Hagge, Henselt formed an offensive
            against the warring Scoiatael, resulting in pogroms against
            nonhumans becoming commonplace around the kingdom.
          </p>
        </div>
      </div>
    </div>
  )
}

export { KaedwenModal, KaedwenModal1, KaedwenModal2, KaedwenModal3 }
