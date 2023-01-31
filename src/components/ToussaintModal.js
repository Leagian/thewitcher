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
            Toussaint est un petit duché autonome sous la bannière de l'Empire
            de Nilfgaard, célèbre pour ses vins, ses sols volcaniques régionaux
            actifs, et son climat idéal de jours ensoleillés et pluvieux.
            Toussaint ne possède pas de large armée bien à elle. Elle s'appuie
            plutôt sur quelques régiments de chevaliers errants, qui surveillent
            les frontières et les routes en collaboration avec la Garde Ducale.
            C'est aussi l'un des rares pays du continent qui n'a pas de services
            secrets.
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
            Bien qu'il soit un État vassal de Nilfgaard, Toussaint maintient un
            haut niveau d'autonomie et l'empire Nilfgaardien n'impose pas
            l'autorité impériale sur ses affaires intérieures et respecte ses
            frontières, pour la plupart. Alors que la surface du duché peut
            paraître féerique et sereine, sous les chais se cache un
            gargantuesque système souterrain d'anciennes galeries d'accès, de
            mines etdes donjons, ainsi que des cavernes naturelles et des
            tunnels creusés par la lave, dont on dit qu'ils sont liés au centre
            de la terre.
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
          <h2>Préhistoire et Antiquité</h2>
        </div>
        <div className='body'>
          <p>
            Pendant des siècles, les souterrains de Toussaint ont été habités
            par des créatures intelligentes comme les korreds, les kilmulises,
            les pryskirniks et bien d'autres, dont certaines inconnues jusqu'au
            13ème siècle. Au 8ème siècle, un groupe d'elfes Aen Seidhe fonda
            leur royaume ici avec Beauclair comme capitale. Ils construisirent
            de belles villes de marbre blanc et d'ivoire. Au moment de la
            conjonction des Sphères, c'est ici que la porte du monde vampirique
            s'ouvrit, piégeant les vampires dans ce monde. Ils se divisèrent en
            trois tribus distinctes : les Gharasham, qui restèrent dans la
            partie ouest du continent, les Tdet, qui s'aventurèrent à l'est, et
            les Ammurun, qui traversèrent la Grande Mer en direction de l'ouest.
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
          <h2>Conquête humaine et monde fragmenté</h2>
        </div>
        <div className='body'>
          <p>
            Quelques décennies après le premier débarquement, le royaume du roi
            elfique Divethafs fit face à une invasion menée par le chef Nordling
            Ludovic. En 781, les elfes des terres autour du Beauclair actuel
            abandonèrent leur villes d'ivoire et partirent pour les monts Amell,
            emportant avec eux tout ce qu'ils pouvaient et détruisant tout le
            reste. Tout ce qu'ils ne purent prendre, démolir ou brûler, ils le
            maudirent. Ludovic entra dans les contreforts avec son armée, et
            somma Divethaf de se rendre et de le proclamer roi. Une bataille
            s'ensuivit après le refus de l'elfe et l'armée d'Aen Seidhe fut
            massacrée. Pleurant sur sa défaite, Divethaf accepta de rendre
            hommage. L'année suivante, les humains décidèrent de célébrer
            l'anniversaire de cette victoire par un pogrom, éradiquant tous les
            vestiges sur les pentes du mont Gorgon. La dernière trace elfique
            épargnée par les humains fut la nécropole cachée de Tir ná Béa
            Arainne qui a continue d'être utilisée à travers les âges, protégée
            par Aen Saevherne.
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
          <h2>Conquête humaine et monde fragmenté</h2>
        </div>
        <div className='body'>
          <p>
            Durant les siècles suivants, l'activite principale des premiers
            Toussaintois était apparemment minière, car ils ont creusé de
            nombreuses galeries et mines. Plusieurs donjons furent également
            construits, probablement pour emprisonner des ennemis politiques. La
            terre fut morcelée entre plusieurs petits seigneurs et ducs. L'une
            de ces seigneuries était Epicéa au pied du mont Gorgon, près du lieu
            même de la défaite de Divethafs. Une autre seigneurie, centrée
            autour de Toricella, était la principale force militaire dans la
            lutte contre les elfes restants, qui furent finalement vaincus en
            1050 laissant tout Toussaint sous contrôle humain. Un des événements
            les plus importants et les plus marquants de cette période fut la
            tentative du duc Adam de Nazaire de réguler le flux de la Rivière
            Sansretour à sa convenance, créant involontairement le marais de
            Sansretour.
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
          <h2>Réformes</h2>
        </div>
        <div className='body'>
          <p>
            Au XIIe siècle, la région connaît ses premières réformes, initiées
            par le Duc Henri III. Admiratif des terres lointaines d'Alba du Sud,
            il tenta de civiliser le royaume, par exemple par des modifications
            des lois punitives. Au milieu du siècle, le pouvoir dans le pays fut
            consolidé par la duchesse Adela Marta. Elle ordonna la rénovation du
            palais de la capitale elfique et y déplaça son siège, établissant la
            ville de Beauclair. Elle planta les graines des traditions
            chevaleresques au sein du duché en organisant un tournoi pour ses
            prétendants, récompensant les qualités qu'elle appréciait le plus
            chez les hommes : la force, la bravoure et la ruse. Lors de son
            voyage vers le sud, elle rencontra le plus jeune fils de l'empereur
            Nilfgaardien, Torres, et l'épousa, créant un lien entre Toussaint et
            l'Empire Nilfgaardien. Carolina Roberta, fille d'Ademartas,
            poursuivit les réformes. Elle interdit l'utilisation de couteaux
            pointus pendant les banquets, car elle trouvait la coutume de s'en
            servir pour se curer les dents barbares. Ce fut également elle qui
            reconnut le culte de Lebioda, porté par Saint Plegmund.
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
          <h2>13ème siècle</h2>
        </div>
        <div className='body'>
          <p>
            Le duché fut gouverné par la petite-fille de Carobertas Anna
            Henrietta au moins depuis le 1258, quand elle épousa le duc Raymund.
            Malgré la présence d'un mari, c'était elle qui avait la plus grande
            estime de la part ses sujets. Cependant, après la mort de Raymund en
            1265, Anarietta avait été gardée à l'écart des événements du monde
            par ses conseillers en raison de sa supposée instabilité
            émotionnelle, et appris que la Seconde Guerre du Nord avait brisé
            avait éclaté en fin d'année 1267, informée par Geralt. Pour ça
            trahison, elle emprisonna le ministre Tremblay dans la tour. En
            1275, le Duché tomba sous l'attaque de vampires dirigés par Dettlaff
            van der Eretéine. Selon certaines sources, la duchesse serait morte,
            conduisant à donner le pouvoir au Conseil de régence, mais ce n'est
            pas certain.
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
          <h2>Société, culture et économie</h2>
        </div>
        <div className='body'>
          <p>
            La partie terrestre de la région est habitée principalement par des
            humains d'origine nordique. Les parties souterraines n'ont pas été
            fouillées avant le 13ème siècle et étaient habitées par des
            gremlins, des kilmulises, korreds, pryskirniks, vampires et un
            certain nombre d'espèces encore inconnues. La tradition est chose
            sainte à Toussaint. Les vacances, les plus importantes d'entre elles
            étant celles de Wine Vat, sont vivement observés. Dans l'Antiquité,
            la région possédait une industrie minière. Depuis le milieu du 12ème
            siècle cependant, l'activité économique majeure du duché est
            l'industrie du vin, et les galeries et puits fermés sont peu à peu
            colonisé par des monstres.
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
