import React from 'react';
import './NavBar.css';

function NavBar({ onSelect }) {
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={() => onSelect('home')}>Inicio</button></li>
        <li><button onClick={() => onSelect('services')}>Productos</button></li>
        <li><button onClick={() => onSelect('contact')}>Contacto</button></li>
        <li><button onClick={() => onSelect('location')}>Ubicación</button></li>
        <li><button onClick={() => onSelect('blog')}>Pagos</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;
