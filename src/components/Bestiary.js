import scroll from '../assets/scroll2.png'
const Bestiary = props => {
  const alchemyClick2 = () => props.setShowAlchemy(!props.showAlchemy)
  return (
    <div className='bestiary'>
      <p className='closing-button' onClick={alchemyClick2}>
        X
      </p>

      <h1 className='titlebestiary'>Bestiary</h1>
      <div className='scroll-container'>
        <img src={scroll} alt='old scroll' className='scroll-image' />
      </div>
    </div>
  )
}

export default Bestiary
