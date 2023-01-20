import { useState, useEffect } from 'react'
import cauldron from '../assets/cauldron.png'
const Potions = props => {
  const [selectedPotion, setSelectedPotion] = useState(null)
  const [selectedCount, setSelectedCount] = useState(0)

  useEffect(() => {
    setSelectedCount(props.selectedIngredients.length)
  }, [props.selectedIngredients])

  const handleClick = () => {
    const filteredPotions = props.potions.filter(potion => {
      return props.selectedIngredients.every(ingredient => {
        return potion.ingredients.includes(ingredient.name)
      })
    })

    setSelectedPotion(filteredPotions[0])
  }

  return (
    <div className='potion'>
      <div className='container-potion'>
        {selectedPotion && (
          <img
            className='img-potion'
            src={selectedPotion.image}
            alt={selectedPotion.name}
          />
        )}
      </div>
      <div className='button-container'>
        <button className='button-mix' onClick={handleClick}>
          Mix ingredients
        </button>
      </div>
      <div className='counter-container'>
        <div className='counter'>Selected ingredients: {selectedCount}/2</div>
      </div>
      <div className='cauldron-container'>
        <img
          src={cauldron}
          alt='black metalic cauldron'
          className='cauldron-image'
        />
      </div>
    </div>
  )
}
export default Potions
