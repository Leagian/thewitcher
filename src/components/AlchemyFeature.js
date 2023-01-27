import AlchemyMenu from './AlchemyMenu'
const AlchemyFeature = props => {
  return (
    <>
      <div className='blur-filter'></div>
      <div className='alchemy-container'>
        <AlchemyMenu
          showAlchemy={props.showAlchemy}
          setShowAlchemy={props.setShowAlchemy}
        />
      </div>
    </>
  )
}

export default AlchemyFeature
