import { useState, useEffect } from 'react'
import cauldron from '../assets/cauldron.png'
const Potions = props => {
  const [selectedPotion, setSelectedPotion] = useState()
  const [selectedCount, setSelectedCount] = useState(0)
  const [buttonClicked, setButtonClicked] = useState(false)

  useEffect(() => {
    setSelectedCount(props.selectedIngredients.length)
  }, [props.selectedIngredients])

  const handleClick = () => {
    setButtonClicked(true)
    const filteredPotions = props.potions.filter(potion => {
      const potionIngredients = potion.ingredients
        .split(',')
        .map(ingredient => ingredient.trim())
      const intersection = props.selectedIngredients.filter(ingredient =>
        potionIngredients.includes(ingredient.name)
      )
      return intersection.length === 2
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
        {!selectedPotion && buttonClicked && (
          <div className='invalide-mix'>
            <p>
              This mix doesn't make anything. <br /> Try looking at the
              ingredients description to get a clue of the possible mixes.
            </p>
          </div>
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
