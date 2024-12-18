import React from 'react';
import './NavBar.css';

function NavBar({ onSelect }) {
  return (
    <nav className="navbar">
      <ul>
        <li><button className='butonnav'    onClick={() => onSelect('home')}>Inicio</button></li>
        <li><button  className='butonnav'   onClick={() => onSelect('services')}>servicios</button></li>
        <li><button  className='butonnav'   onClick={() => onSelect('contact')}>Contacto</button></li>
        <li><button  className='butonnav'   onClick={() => onSelect('location')}>cordenadas</button></li>
        <li><button  className='butonnav'   onClick={() => onSelect('blog')}>blog</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;
