const Inventorygrid = props => {
  return (
    <div className='Inventory'>
      <h1 className='titleinventory'>Inventory</h1>
      <div className='grid-container'>
        {props.ingredients.map((ingredient, index) => (
          <div
            className={`grid-cell ${
              props.selectedIngredients.includes(ingredient) ? 'selected' : ''
            }`}
            key={index}
            onClick={() => props.handleClick(ingredient)}
          >
            <img
              src={ingredient.image}
              alt={ingredient.name}
              className='ingredient-image'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Inventorygrid
