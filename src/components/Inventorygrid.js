import { useState } from 'react'

const Inventorygrid = props => {
  const [displayTooltip, setDisplayTooltip] = useState(false)
  const [hoveringElement, setHoveringElement] = useState(null)

  return (
    <div className='Inventory'>
      <h1 className='titleinventory'>Inventaire</h1>
      <div className='grid-container'>
        {props.ingredients.map(ingredient => {
          const keyExists =
            localStorage.getItem(`spark_${ingredient.id}`) === 'true'
          return (
            <div
              className={`grid-cell ${
                props.selectedIngredients.includes(ingredient) ? 'selected' : ''
              } `}
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
                className={`ingredient-image ${keyExists ? 'activated' : ''}`}
              />
              {displayTooltip && hoveringElement === ingredient && (
                <div className='tooltip-activated'>
                  {keyExists ? (
                    <>
                      <p className='ingredient-name'> {ingredient.name}</p>
                      <p className='ingredient-rarity'>
                        Rareté: {ingredient.rarity}
                      </p>
                      <p className='ingredient-description'>
                        Souvent utilisé dans la préparation de la{' '}
                        {ingredient.usedFor}
                      </p>
                    </>
                  ) : (
                    <p className='error-message'>
                      Essayez de regarder dans la ville de {ingredient.location}
                      , vous pourriez en trouver...
                    </p>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Inventorygrid
