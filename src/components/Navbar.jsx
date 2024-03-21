import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import eznet from '../assets/eznet.jpg';
import { Link } from 'react-router-dom'

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={eznet} alt="eznet logo" className='logo'/>
      <ul>
        <li><Link to='Landing' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='Program' smooth={true} offset={0} duration={500}>Gallery</Link></li>
        <li><Link to='Landing' smooth={true} offset={0} duration={500}>Services</Link></li>
        <li><Link to='About' smooth={true} offset={0} duration={500}>About Us</Link></li>
        <li><Link to='Contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;