import React, { useState } from 'react'

import NavMenu from '../components/NavMenu'
import Spark from '../components/Spark'
import Spark1 from '../components/Spark1'

const Novigrad = () => {
  const [show, setShow] = useState(true)
  const [show1, setShow1] = useState(true)
  return (
    <div className='Novigrad'>
      <div className='sparkImageNovi1'>
        {show ? <Spark show={show} setShow={setShow} /> : null}
      </div>
      <div className='sparkImageNovi2'>
        {show1 ? <Spark1 show1={show1} setShow1={setShow1} /> : null}
      </div>
      <NavMenu />
    </div>
  )
}

export default Novigrad
