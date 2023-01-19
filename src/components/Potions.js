import { useState } from 'react'
const Potions = props => {
  const [selectedPotion, setSelectedPotion] = useState(null)

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
      <button onClick={handleClick}>Mix ingredients</button>
    </div>
  )
}
export default Potions
