import Bestiary from './Bestiary'
import Inventorygrid from './Inventorygrid'
import Potions from './Potions'
import { useState, useEffect } from 'react'

const AlchemyMenu = () => {
  const [potions, setPotions] = useState()
  const [ingredients, setIngredients] = useState()
  const [selectedIngredients, setSelectedIngredients] = useState([])

  useEffect(() => {
    fetch('http://localhost:4242/potions').then(res =>
      res.json().then(potionsData => {
        setPotions(potionsData)
      })
    )
  }, [])

  useEffect(() => {
    fetch('http://localhost:4242/ingredients').then(res =>
      res.json().then(ingredientsData => {
        setIngredients(ingredientsData)
      })
    )
  }, [])

  const handleClick = ingredient => {
    const index = selectedIngredients.indexOf(ingredient)
    if (index === -1) {
      if (selectedIngredients.length < 2) {
        setSelectedIngredients([...selectedIngredients, ingredient])
      }
    } else {
      const newSelectedIngredients = [...selectedIngredients]
      newSelectedIngredients.splice(index, 1)
      setSelectedIngredients(newSelectedIngredients)
    }
  }

  return (
    <div className='box'>
      <div className='menu'>
        <div className='componentsbox'>
          <div className='child1'>
            {ingredients && (
              <Inventorygrid
                ingredients={ingredients}
                selectedIngredients={selectedIngredients}
                handleClick={handleClick}
              />
            )}
          </div>
          <div className='child2'>
            <Potions
              potions={potions}
              selectedIngredients={selectedIngredients}
            />
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
