import React, { useState } from 'react'
import AlchemyFeature from '../components/AlchemyFeature'

import NavMenu from '../components/NavMenu'
import Spark from '../components/Spark'
import Spark1 from '../components/Spark1'

const Vizima = props => {
  const [show, setShow] = useState(true)
  const [show1, setShow1] = useState(true)
  return (
    <div className='Vizima'>
      <div className='sparkImageKaer1'>
        {show ? <Spark show={show} setShow={setShow} id={9} /> : null}
      </div>
      <div className='sparkImageKaer2'>
        {show1 ? <Spark1 show1={show1} setShow1={setShow1} id={10} /> : null}
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

export default Vizima
