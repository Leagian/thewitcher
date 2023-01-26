import React, { useState } from 'react'

import NavMenu from '../components/NavMenu'
import Spark from '../components/Spark'
import Spark1 from '../components/Spark1'

import AlchemyFeature from '../components/AlchemyFeature'

const Novigrad = props => {
  const [show, setShow] = useState(true)
  const [show1, setShow1] = useState(true)
  return (
    <div className='Novigrad'>
      <div className='sparkImageNovi1'>
        {show ? <Spark show={show} setShow={setShow} id={1} /> : null}
      </div>
      <div className='sparkImageNovi2'>
        {show1 ? <Spark1 show1={show1} setShow1={setShow1} id={2} /> : null}
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

export default Novigrad
