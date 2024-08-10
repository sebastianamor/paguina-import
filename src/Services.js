import React, { useState } from 'react';
import './Services.css';
import llantas from './imagenes/llantas de autos.jpg';
import neumaticos from './imagenes/neumaticos.jpg';
import butacas from './imagenes/butacas racer.jpg';
import otros from './imagenes/otros auto.jpg';

function Services() {
  const [selectedService, setSelectedService] = useState('');

  const handleButtonClick = (service) => {
    setSelectedService(service);
  };

  const renderMessage = (service) => {
    switch (service) {
      case 'llantas':
        return <p>
          <h1>Llantas</h1>
        <div class="gallery">
  <img src="https://picsum.photos/id/199/400/300" alt="the beach"/>
  <img src="https://picsum.photos/id/1011/400/300" alt="a girl doing kayak"/>
  <img src="https://picsum.photos/id/124/400/300" alt="a small boat in the sea"/>
  <img src="https://picsum.photos/id/235/400/300" alt="a mountain"/>
  <img src="https://picsum.photos/id/423/400/300" alt="a forest"/>
       </div>
        </p>
      case 'neumaticos':
        return <p><h1>Neumáticos</h1></p>;
      case 'butacas':
        return <p><h1>Butacas</h1></p>;
      case 'otros':
        return <p><h1>Otros</h1></p>;
      default:
        return null;
    }
  };

  return (
    <section className="services">
      <h2>Productos</h2>
      <div className="service-buttons">
        <div className="service-item">
          <button onClick={() => handleButtonClick('llantas')}>
            <img src={llantas} alt="Llantas" className="civ" />
          </button>
          {selectedService === 'llantas' && <div className="service-message">{renderMessage('llantas')}</div>}
        </div>
        <div className="service-item">
          <button onClick={() => handleButtonClick('neumaticos')}>
            <img src={neumaticos} alt="Neumáticos" className="civ" />
          </button>
          {selectedService === 'neumaticos' && <div className="service-message">{renderMessage('neumaticos')}</div>}
        </div>
        <div className="service-item">
          <button onClick={() => handleButtonClick('butacas')}>
            <img src={butacas} alt="Butacas" className="civ" />
          </button>
          {selectedService === 'butacas' && <div className="service-message">{renderMessage('butacas')}</div>}
        </div>
        <div className="service-item">
          <button onClick={() => handleButtonClick('otros')}>
            <img src={otros} alt="Otros" className="civ" />
          </button>
          {selectedService === 'otros' && <div className="service-message">{renderMessage('otros')}</div>}
        </div>
      </div>
    </section>
  );
}

export default Services;
