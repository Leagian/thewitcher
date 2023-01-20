import scroll from '../assets/scroll2.png'
const Bestiary = () => {
  return (
    <div className='bestiary'>
      <h1 className='titlebestiary'>Bestiary</h1>
      <div className='scroll-container'>
        <img src={scroll} alt='old scroll' className='scroll-image' />
      </div>
    </div>
  )
}

export default Bestiary
