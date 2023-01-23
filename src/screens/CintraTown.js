import React, { useState } from 'react'

import FlowerImage from '../components/FlowerImage'
import Spark from '../components/Spark'

const CintraTown = () => {
  const [show, setShow] = useState(true)

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
        <Spark />
      </div>
      <div className='light'></div>
    </div>
  )
}

export default CintraTown
