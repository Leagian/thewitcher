const Bestiary = props => {
  const alchemyClick2 = () => props.setShowAlchemy(!props.showAlchemy)
  const bestiary = props.bestiary
  const selectedOftenUsed = props.selectedOftenUsed
  const filterBestiary =
    bestiary && selectedOftenUsed
      ? bestiary.filter(beast => beast.bestiaryname === selectedOftenUsed)
      : []
  return (
    <div className='bestiary'>
      <p className='closing-button' onClick={alchemyClick2}>
        X
      </p>
      <div className='scroll-container'>
        <h1 className='titlebestiary'>Bestiaire</h1>
        {filterBestiary.length > 0 ? (
          filterBestiary.map(beast => (
            <div className='bestiary-container' key={beast.id}>
              <img
                className=' bestiary-image'
                src={beast.image}
                alt={beast.bestiaryname}
              />
              <div className='bestiary-name'>{beast.bestiaryname}</div>
              <div className='bestiary-description'>{beast.description}</div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Bestiary
