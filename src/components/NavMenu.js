import { useState } from 'react'

import NavItem from './NavItem'

import Logo from '../assets/logo.png'

const NavMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
    <div className='btn-global'>
      <img src={Logo} className='btn-circle' onClick={handleToggle} />
      {navbarOpen ? (
        <NavItem navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      ) : (
        ''
      )}
    </div>
  )
}

export default NavMenu
