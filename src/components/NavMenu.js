import { useState } from 'react'
import NavItem from './NavItem'

const NavMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
    <div className='btn-circle' onClick={handleToggle}>
      {navbarOpen ? <NavItem /> : ''}
    </div>
  )
}

export default NavMenu
