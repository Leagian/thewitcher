import { Link } from 'react-router-dom'
import NavItem1 from '../assets/menu/coffee.svg'
import NavItem2 from '../assets/menu/ketchup.svg'

const NavITEM = () => {
  return (
    <div className='circle-menu'>
      <Link to='/map' className='links-circle NavItem1'>
        <img src={NavItem1} />
      </Link>
      <Link to='/cintratown' className='links-circle NavItem2'>
        <img src={NavItem2} />
      </Link>
    </div>
  )
}

export default NavITEM
