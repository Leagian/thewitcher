import { useState } from 'react'

const Inventorygrid = props => {
  const [displayTooltip, setDisplayTooltip] = useState(false)
  const [hoveringElement, setHoveringElement] = useState(null)
  return (
    <div className='Inventory'>
      <h1 className='titleinventory'>Inventory</h1>
      <div className='grid-container'>
        {props.ingredients.map(ingredient => (
          <div
            className={`grid-cell ${
              props.selectedIngredients.includes(ingredient) ? 'selected' : ''
            }`}
            key={ingredient.id}
            onClick={() => props.handleClick(ingredient)}
            onMouseEnter={() => {
              setDisplayTooltip(true)
              setHoveringElement(ingredient)
            }}
            onMouseLeave={() => setDisplayTooltip(false)}
          >
            <img
              src={ingredient.image}
              alt={ingredient.name}
              className='ingredient-image'
            />
            {displayTooltip && hoveringElement === ingredient && (
              // <div className='wrapper'>
              <div className='tooltip'>
                <p>Name: {ingredient.name}</p>
                <p>Rarity: {ingredient.rarity}</p>
              </div>
              // </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Inventorygrid
