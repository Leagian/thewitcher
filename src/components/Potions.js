import { useState, useEffect } from 'react'
import cauldron from '../assets/cauldron.png'
const Potions = props => {
  const [selectedPotion, setSelectedPotion] = useState()
  const [selectedCount, setSelectedCount] = useState(0)
  const [buttonClicked, setButtonClicked] = useState(false)
  const [potionTooltip, setPotionTooltip] = useState(false)
  const setSelectedOftenUsed = props.setSelectedOftenUsed

  useEffect(() => {
    setSelectedCount(props.selectedIngredients.length)
  }, [props.selectedIngredients])

  const handleClick = () => {
    const filteredPotions = props.potions.filter(potion => {
      const potionIngredients = potion.ingredients
        .split(',')
        .map(ingredient => ingredient.trim())
      const intersection = props.selectedIngredients.filter(ingredient =>
        potionIngredients.includes(ingredient.name)
      )
      return intersection.length === 2
    })
    setButtonClicked(true)
    setSelectedPotion(filteredPotions[0])
  }
  const updateMonster = () => {
    setSelectedOftenUsed(selectedPotion.oftenused)
  }

  return (
    <div className='potion'>
      <div className='container-potion'>
        {selectedPotion && (
          <img
            className='img-potion'
            src={selectedPotion.image}
            alt={selectedPotion.name}
            onMouseEnter={() => setPotionTooltip(true)}
            onMouseLeave={() => setPotionTooltip(false)}
            onClick={updateMonster}
          />
        )}
        {potionTooltip && selectedPotion && (
          <div className='potion-activated'>
            <p className='potion-name'> {selectedPotion.potionname}</p>
            <p className='info2'>
              Toxicité: {selectedPotion.toxicity}
              <br />
              Durée: {selectedPotion.duration}
            </p>
            <p className='info'>
              Vous pouvez cliquer sur la potion pour découvrir le monstre contre
              lequel elle est utilisée.
            </p>
          </div>
        )}
        {!selectedPotion && buttonClicked && (
          <div className='invalide-mix'>
            <p className='invalide-text'>
              Ce mélange ne produit rien. Essayez de consulter la description
              des ingrédients pour trouver une piste
            </p>
          </div>
        )}
      </div>
      <div className='button-container'>
        <button className='button-mix' onClick={handleClick}>
          Melanger les ingredients
        </button>
      </div>
      <div className='counter-container'>
        <div className='counter'>
          Ingrédients sélectionnés:
          <span className='counter-number'> {selectedCount}/2 </span>{' '}
        </div>
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
