import React, { useState } from 'react'

import FlowerImage from '../components/FlowerImage'
import Spark1 from '../components/Spark1'
import NavMenu from '../components/NavMenu'
import AlchemyFeature from '../components/AlchemyFeature'

const CintraTown = props => {
  const [show, setShow] = useState(true)
  const [show1, setShow1] = useState(true)

  return (
    <div className='CintraTown'>
      <div className='flowerImage1 flowerImg'>
        {show ? <FlowerImage show={show} setShow={setShow} /> : null}
      </div>
      <div className='flowerImage2 flowerImg'>
        {show ? <FlowerImage show={show} setShow={setShow} /> : null}
      </div>
      <div className='flowerImage3 flowerImg'>
        {show ? <FlowerImage show={show} setShow={setShow} /> : null}
      </div>
      <div className='flowerImage4 flowerImg'>
        {show ? <FlowerImage show={show} setShow={setShow} /> : null}
      </div>
      <div className='flowerImage5 flowerImg'>
        {show ? <FlowerImage show={show} setShow={setShow} /> : null}
      </div>
      <div className='sparkImageCintra'>
        {show1 ? <Spark1 show1={show1} setShow1={setShow1} /> : null}
      </div>
      <div className='light'></div>
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

export default CintraTown
