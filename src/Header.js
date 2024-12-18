import React from 'react';
import './Header.css';
import profileImag from './imagenes/logo emp.jpg'; // Ajusta la ruta según la ubicación de tu imagen

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div>
        <img src={profileImag} alt="Perfil" className="profile-imag" />
         <p> <h1> 
            Ciudad airsoft </h1>¿Estás listo para unirte a la acción y vivir una experiencia inolvidable? </p>
        </div>
      </div>
    </header>
  );
}

export default Header;