import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import NavItem1 from '../assets/icon_map.png'
import NavItem2 from '../assets/Potion.jpg'

const NavItem = props => {
  const alchemyClick = () => props.setShowAlchemy(!props.showAlchemy)
  const { navbarOpen, setNavbarOpen } = props
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (navbarOpen) {
      setTimeout(() => setShow(true), 200)
    } else {
      setTimeout(() => setShow(false), 200)
    }
  }, [navbarOpen])
  return (
    <>
      <div
        className={`globale ${show ? 'show' : ''}`}
        onMouseLeave={() => setNavbarOpen(false)}
      ></div>
      <Link to='/map' className={`NavItem1 ${show ? 'show' : ''}`}>
        <img src={NavItem1} />
        <span>Carte</span>
      </Link>
      <div className={`NavItem2 ${show ? 'show' : ''}`} onClick={alchemyClick}>
        <img src={NavItem2} />
        <span>Alchimie</span>
      </div>
    </>
  )
}

export default NavItem
