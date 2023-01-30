import React, { useState } from 'react'
import AlchemyFeature from '../components/AlchemyFeature'

import NavMenu from '../components/NavMenu'
import Spark from '../components/Spark'
import Spark1 from '../components/Spark1'

const Beauclair = props => {
  const [show, setShow] = useState(true)
  const [show1, setShow1] = useState(true)
  return (
    <div className='Beauclair'>
      <div className='sparkImageBeauclair1'>
        {show ? <Spark show={show} setShow={setShow} id={3} /> : null}
      </div>
      <div className='sparkImageBeauclair2'>
        {show1 ? <Spark1 show1={show1} setShow1={setShow1} id={4} /> : null}
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

export default Beauclair
