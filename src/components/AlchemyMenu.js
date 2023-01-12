import Bestiary from './Bestiary'
import Inventorygrid from './Inventorygrid'
import Potions from './Potions'

const AlchemyMenu = () => {
  return (
    <div className='box'>
      <div className='menu'>
        <h1 className='titlemenu'>Alchemy</h1>
        <div className='componentsbox'>
          <div className='child1'>
            <Inventorygrid />
          </div>
          <div className='child2'>
            <Potions />
          </div>
          <div className='child3'>
            <Bestiary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlchemyMenu
