import React from 'react'
import './RedaniaModal.scss'

function RedaniaModal({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='rModalContainer'>
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
          <h2>Redania</h2>
        </div>
        <div className='body'>
          <p>
            Redania, named after Roeden, is a wealthy realm which profits from
            trade and agriculture and one of the Four Kingdoms. The capital city
            of Redania is Tretogor. Other prominent cities are Oxenfurt, with
            the largest university in the Northern Realms and the free city of
            Novigrad. The kingdoms neighbors are Kovir, Caingorn, Kaedwen,
            Aedirn, and Temeria.
          </p>
        </div>
      </div>
    </div>
  )
}

function RedaniaModal1({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='rModalContainer1'>
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
            Redania was first settled by the Dauk and Wozgor people before the
            First Landing, specifically the Gelibol region and the Nimnar
            valley, according to a classification by the historian Arnelius
            Grock.
          </p>
        </div>
      </div>
    </div>
  )
}

function RedaniaModal2({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='rModalContainer2'>
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
            In 1263, during the First Northern War, the Royal Redanian Army,
            along with the forces of Aedirn, Temeria, and Kaedwen, faced the
            invading Nilfgaardian Army in Lower Sodden, during the Battle of
            Sodden Hill. The northern armies were under the united leadership of
            King Vizimir II of Redania, and were successful in preventing the
            Nilfgaardian invasion. After the war, tensions rose with Temeria,
            and King Vizimir II forced Novigrad into ius stapulae, blocking all
            merchandise routes and seizing any wares from Nilfgaard or Temeria.
            King Foltest of Temeria responded by introducing the same law to
            Vizima and Gors Velen, blocking all Redanian wares, which started to
            affect the economy as Redania did not have the resources or
            manufactories to produce their own goods. King Vizimir II of Redania
            was assassinated during the Second Nilfgaard War. During the
            interregnum, the country was ruled by a Regency Council headed by
            Sigismund Dijkstra, the head of Redanian Intelligence, and Philippa
            Eilhart, head of the Lodge of Sorceresses. Subsequently, reached the
            proper age, the country passed in the hands of Radovid V, known as
            The Stern.
          </p>
        </div>
      </div>
    </div>
  )
}

function RedaniaModal3({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='rModalContainer3'>
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
          <h2>Society</h2>
        </div>
        <div className='body'>
          <p>
            Quite specific is the social structure of this country - the cult of
            the nobility runs strong in Redania, and higher social stratum
            possesses more privilege here than in any nearby realm. Great
            differences in wealth exist among the gentry, but Redanian law cares
            for birth not property, making a well-born beggar the legal equal of
            the richest magnate. Those of high birth and great wealth draw the
            latter primarily from the grain trade and pedigreed horse husbandry.
            As a consequence of nobilitys privileged position, the peasantry is
            treated worse here than in any neighboring state, and only the kings
            kings iron fist keeps them from rebelling. The government of Redania
            Redania is also heavily influenced by sorceresses.
          </p>
        </div>
      </div>
    </div>
  )
}

function RedaniaModal4({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='rModalContainer4'>
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
          <h2>Culture</h2>
        </div>
        <div className='body'>
          <p>
            On Saovine, Redanian children burn figurines of Falka on bonfires,
            to remember her famous rebellion. Redanian steeds are unsurpassed,
            and thus the Redanian cavalry is among the best of its kind in the
            world, and with the countrys nobility filling its ranks, it is the
            heart of Royal Redanian Army. For ages, Redania has fought a customs
            war with Temeria, its primary rival in the North. Redania possesses
            the best intelligence network in the world, and throughout history
            they have infiltrated many of their rivals fellow agencies.
          </p>
        </div>
      </div>
    </div>
  )
}

function RedaniaModal5({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='rModalContainer5'>
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
          <h2>Economy and trade</h2>
        </div>
        <div className='body'>
          <p>
            The Kingdom derives enormous profits from trade with Novigrad as
            well as grain exports. It may be said that the monarchy is the
            granary of the whole Continent, and even other parts of the world.
            Therefore, the dominant landscape of Redania is huge, undulating
            fields of grain. In the 13th century, the state economy became
            seriously threatened, because of the flow of cheap goods from and
            others into the country, which constitute serious competition for
            local artisans. In addition, there are very few manufactories.
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
