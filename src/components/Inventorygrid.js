const Inventorygrid = props => {
  return (
    <div className='Inventory'>
      <h1 className='titleinventory'>Inventory</h1>
      <div className='grid-container'>
        {props.ingredients.map((ingredient, index) => (
          <div className='grid-cell' key={index}>
            <img
              src={ingredient.image}
              alt={ingredient.name}
              className='ingredient-image'
            />
            {/* <p> {ingredient.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Inventorygrid
