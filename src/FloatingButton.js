import React from 'react';
import './FloatingButton.css';

function FloatingButton() {
  const phoneNumber = "+56 9 7692 3044 "; // Reemplaza esto con tu número de teléfono de WhatsApp
  const message = "Hola, estoy interesado en sus productos"; // Mensaje predeterminado

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} className="floating-button" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </a>
  );
}

export default FloatingButton;