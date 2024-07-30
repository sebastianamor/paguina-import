import React from 'react';
import './Header.css';
import profileImag from './imagenes/logo emp.jpg'; // Ajusta la ruta según la ubicación de tu imagen

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div>
        <img src={profileImag} alt="Perfil" className="profile-imag" />
          <h1> 
          </h1>
          <p><h2> </h2></p>
        </div>
      </div>
    </header>
  );
}

export default Header;