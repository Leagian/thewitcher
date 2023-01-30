import React, { useState } from 'react'

import AlchemyFeature from '../components/AlchemyFeature'
import NavMenu from '../components/NavMenu'
import Spark from '../components/Spark'
import Spark1 from '../components/Spark1'

const NilfgaardTown = props => {
  const [show, setShow] = useState(true)
  const [show1, setShow1] = useState(true)
  return (
    <div className='NilfgaardTown'>
      <div className='sparkImageNilf1'>
        {show ? <Spark show={show} setShow={setShow} id={5} /> : null}
      </div>
      <div className='sparkImageNilf2'>
        {show1 ? <Spark1 show1={show1} setShow1={setShow1} id={6} /> : null}
      </div>
      <NavMenu
        showAlchemy={props.showAlchemy}
        setShowAlchemy={props.setShowAlchemy}
      />
      {props.showAlchemy && (
        <AlchemyFeature
          showAlchemy={props.showAlchemy}
          setShowAlchemy={props.setShowAlchemy}
        />
      )}
    </div>
  )
}

export default NilfgaardTown
