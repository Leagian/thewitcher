const CharactersCard = props => {
  return (
    <div className='charactersCard-container'>
      <div className='charactersCard-body'>
        <div className='charactersCard-front'>
          <img
            className='charactersCard-img'
            src={props.image}
            alt={props.name}
          />
          <h3 className='charactersCard-name'>{props.name}</h3>
        </div>
        <div className='charactersCard-back'>
          <p className='charactersCard-desc'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CharactersCard
