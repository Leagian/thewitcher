import React from 'react'
import './ToussaintModal.scss'
import { useEffect, useRef } from 'react'

function ToussaintModal({ closeModal }) {
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
      <div className='toModalContainer'>
        <div className='title'>
          <h2>Toussaint</h2>
        </div>
        <div className='body'>
          <p>
            Toussaint is a small autonomous duchy under the banner of the Empire
            of Nilfgaard, famous for its wines, enabled by the regions volcanic
            soil and ideal combination of sunny and rainy days. Toussaint does
            not maintain a large standing army of its own, instead relying on a
            few regiments of knights-errant, watching the borders and roads in
            conjunction with Ducal Guard. Toussaint is also one of the few
            countries in the Continent which does not have a Secret Service.
          </p>
        </div>
      </div>
    </div>
  )
}

function ToussaintModal1({ closeModal }) {
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
      <div className='toModalContainer1'>
        <div className='title'>
          <h2>Toussaint</h2>
        </div>
        <div className='body'>
          <p>
            Despite being a vassal state of Nilfgaard, Toussaint maintains high
            level of autonomy and the Nilfgaardian Empire does not tend to
            impose imperial authority on its internal affair or violate its
            borders for the most part. While the duchys surface may be fairy and
            and serene, beneath the wine cellars it hides a gargantuan
            underground system of interconnecting ancient adits, mines and
            dungeons, as well as natural caverns and tunnels hollowed by lava,
            allegedly connected with the center of the earth.
          </p>
        </div>
      </div>
    </div>
  )
}

function ToussaintModal2({ closeModal }) {
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
      <div className='toModalContainer2'>
        <div className='title'>
          <h2>Prehistory and Ancient Times</h2>
        </div>
        <div className='body'>
          <p>
            For ages the undergrounds of modern-day Toussaint were inhabited by
            intelligent creatures like korreds, kilmulises, pryskirniks and many
            others, some of them unknown in witcher tomes even till the 13th
            century. In the 8th century, a group of Aen Seidhe elves founded
            their kingdom here with modern-day Beauclair as its capital. They
            built beautiful cities made of white marble and ivory. When the
            Conjunction of the Spheres occured, it was here where the gate from
            the vampiric universe opened, trapping vampires in this world. They
            split into three distint tribes: Gharasham, who stayed in the
            western part of the Continent, Tdet, who ventured east, and Ammurun,
            who crossed the Great Sea heading to the west.
          </p>
        </div>
      </div>
    </div>
  )
}

function ToussaintModal3({ closeModal }) {
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
      <div className='toModalContainer3'>
        <div className='title'>
          <h2>Human conquest and fragmented land</h2>
        </div>
        <div className='body'>
          <p>
            A couple of decades after the First Landing, elven king Divethafs
            realm faced a invasion led by Nordling chieftain Ludovic. In 781 the
            elves from the land around todays Beauclair abandoned their ivory
            cities and left for the Amell mountains, taking with them all that
            they could and destroying everything else. Whatever they could not
            take and did not manage to demolish or burn, they cursed. Ludovic
            marched into the foothills with his army, demanding Divethaf to
            surrender and proclaim him as king. A battle ensued after the elf
            refused and Aen Seidhe army was slain. Weeping over the loss,
            Divethaf agreed to pay the homage. Next year humans decided to
            celebrate the anniversary of the victory with a pogrom, genociding
            all the remnants at the Mount Gorgon slopes. The last untouched by
            humans elven trace was the hidden necropoly of Tir ná Béa Arainne
            which continued to be used over the course of subsequent ages,
            protected by Aen Saevherne.
          </p>
        </div>
      </div>
    </div>
  )
}

function ToussaintModal4({ closeModal }) {
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
      <div className='toModalContainer4'>
        <div className='title'>
          <h2>Human conquest and fragmented land</h2>
        </div>
        <div className='body'>
          <p>
            In the following centuries the main occupation of early Toussantois
            was apparently mining, as they hollowed many adits and mines.
            Several dungeons were also constructed then, probably to imprison
            political enemies, the land was parcellated among several petty
            lords and dukes. One of such lordships was Epicéa on Gorgon
            Foothils, near the very place of Divethafs defeat. Another lordship,
            lordship, centered around Toricella, was the primary military force
            in fight against the remaining elves, who were finally defeated in
            1050s leaving all of futures Toussaint under human control. One of
            the most important and landscape-changing events of this period was
            Nazairi Duke Adams attempt to regulate the flow of the Sansretour
            River to his likeness, and unwilling creation of the Sansretour
            Marsh in the process.
          </p>
        </div>
      </div>
    </div>
  )
}

function ToussaintModal5({ closeModal }) {
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
      <div className='toModalContainer5'>
        <div className='title'>
          <h2>Reforms</h2>
        </div>
        <div className='body'>
          <p>
            In the 12th century the region witnessed its first reforms,
            initiated by Duke Henri III. Admiring distant lands at Lower Alba he
            tried to civilize the realm, e.g. by changes in the punitive law. At
            At the middle point of the century the power in the country was
            consolidated by Duchess Adela Marta. She ordered the renovation of
            the elven capital palace and moved her seat there, establishing the
            city of Beauclair. She planted the seeds of chivalric traditions in
            the Duchy by organising a tourney for her suitors, rewarding the
            qualities she valued most in men : Strength, Valor and Cunning. On
            her journey south she met the youngest son of Nilfgaardian Emperor
            Torres and wed him, creating a bond between Toussaint and the
            Nilfgaardian Empire. Carolina Roberta, Ademartas daughter, continued
            continued the reforms. She forbade the use of pointed knives during
            the feasts, as she found the custom of using them to pick ones teeth
            teeth barbarous. She was also the one who recognized the cult of
            Lebioda, brought here by Saint Plegmund.
          </p>
        </div>
      </div>
    </div>
  )
}

function ToussaintModal6({ closeModal }) {
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
      <div className='toModalContainer6'>
        <div className='title'>
          <h2>13th Century</h2>
        </div>
        <div className='body'>
          <p>
            The duchy was ruled by Carobertas granddaughter Anna Henrietta at
            least since the 1258 when she married duke Raymund. Despite having a
            husband it was she who held the greater estime of her subjects.
            However, since Raymunds death in 1265, Anarietta had been kept
            unaware of the worlds events by her councelors due to her supposed
            emotional instability and learnt that the Northern War II had broken
            up only in late 1267 when informed of it by Geralts hanza. For this
            treason she imprisoned minister Tremblay in the tower. In 1275 the
            Duchy fell under the attack of vampires led by Dettlaff van der
            Eretein. Depending on certain circumstances the Duchess might have
            died leading to giving the power in hands of the Regency Council,
            but it is not certain.
          </p>
        </div>
      </div>
    </div>
  )
}

function ToussaintModal7({ closeModal }) {
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
      <div className='toModalContainer7'>
        <div className='title'>
          <h2>Society, culture and economy</h2>
        </div>
        <div className='body'>
          <p>
            The above-ground part of the region is inhabited predominantly by
            humans of Nordling origin. Underground parts remained unsearched to
            at least 13th century and are inhabited by gremlins, kilmulises,
            korreds, pryskirniks, vampires and a number of species yet unknown
            to science. Tradition is a holy thing in Toussaint. Holidays, the
            most important of them being Wine Vat, are keenly observed. In the
            ancient times the region had a mining industry. Since the middle
            point of the 12th century however, the major area of the duchys
            economy has been wine industry and the closed adits and shafts are
            being slowly colonized by monsters.
          </p>
        </div>
      </div>
    </div>
  )
}

export {
  ToussaintModal,
  ToussaintModal1,
  ToussaintModal2,
  ToussaintModal3,
  ToussaintModal4,
  ToussaintModal5,
  ToussaintModal6,
  ToussaintModal7
}
