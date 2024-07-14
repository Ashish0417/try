import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/OIP (1).jpeg'
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import menu_icon from '../../assets/menu.png'

const Navbar = ({notHome}) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [Sticky, setSticky] = useState(false);
  useEffect(
    () => {
      window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false)
      })
    },
  )

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${Sticky|notHome ? 'dark-nav' : ''}`}>
      <img src={logo} alt='' className='logo' />
      <ul className={mobileMenu ? '':'hide-mobile-menu'}>
        <li><RouterLink  to='/' >Home</RouterLink></li>
        <li><Link to='Types' smooth={true} offset={-260} duration={500} activeClass="active">Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} activeClass="active">About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500 * 2} activeClass="active">Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500 * 2} activeClass="active">Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500 * 3} className='btn' activeClass="active">Contact us</Link></li>
      </ul>
      < img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar