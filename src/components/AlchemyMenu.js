import Bestiary from './Bestiary'
import Inventorygrid from './Inventorygrid'
import Potions from './Potions'
import { useState, useEffect } from 'react'

const AlchemyMenu = () => {
  const [ingredients, setIngredients] = useState()
  useEffect(() => {
    fetch('http://localhost:4242/ingredients').then(res =>
      res.json().then(ingredientsData => {
        setIngredients(ingredientsData)
      })
    )
  }, [])

  return (
    <div className='box'>
      <div className='menu'>
        {/* <h1 className='titlemenu'>Alchemy</h1> */}
        <div className='componentsbox'>
          <div className='child1'>
            {ingredients && <Inventorygrid ingredients={ingredients} />}
          </div>
          <div className='child2'>
            <Potions />
          </div>
          <div className='child3'>
            <Bestiary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlchemyMenu
