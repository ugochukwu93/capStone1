import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../Images/cooking.png'

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <div className='logo'>
      <Link to='/'><img src={logo} alt='logo'/></Link>
      </div>
      <div className="nav-items">
      <ul className='nav-links'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/product'><li>Product</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar