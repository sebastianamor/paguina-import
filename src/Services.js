import React, { useState } from 'react';
import './Services.css';
import llantas from './imagenes/llantas de autos.jpg';
import neumaticos from './imagenes/neumaticos.jpg';
import butacas from './imagenes/butacas racer.jpg';
import otros from './imagenes/otros auto.jpg';
import llan1  from './imagenes/llanta 1.jpg';
import llan2  from './imagenes/llanta 2.jpg'
import llan3  from './imagenes/llanta 3.jpg'
import llan4  from './imagenes/llanta 4.jpg'
import llan5  from './imagenes/llanta 5.jpg'
import neum1 from './imagenes/neumatico 1.jpg'
import neum2 from './imagenes/neumatico 2.jpg'
import butaca1 from './imagenes/butca 1.jpg'

function Services() {
  const [selectedService, setSelectedService] = useState('');

  const handleButtonClick = (service) => {
    setSelectedService(service);
  };

  const renderMessage = (service) => {
    switch (service) {
      case 'llantas':
        return <p>
          <h1>Llantas    
          </h1>
       <a   href="https://www.instagram.com/jmvimports_llantas/" target="_blank"  > <div class="gallery"    >
  <img src={llan1}   alt="the beach"/>
  <img src={llan2} alt="a girl doing kayak"/>
  <img src={llan3} alt="a small boat in the sea"/>
  <img src={llan4} alt="a mountain"/>
  <img src={llan5} alt="a forest"/>
       </div></a>
        </p>
      case 'neumaticos':
        return <p><h1>Neumáticos</h1>
            <a   href="https://www.instagram.com/jmvimports_llantas/" target="_blank"  > <div class="gallery"    >
  <img src={neum1}/>
  <img src={neum2}/>
  <img src="https://picsum.photos/id/124/400/300" alt="a small boat in the sea"/>
  <img src="https://picsum.photos/id/235/400/300" alt="a mountain"/>
  <img src="https://picsum.photos/id/423/400/300" alt="a forest"/>
       </div></a>
        </p>;
      case 'butacas':
        return <p><h1>Butacas</h1>
             <a   href="https://www.instagram.com/jmvimports_llantas/" target="_blank"  > <div class="gallery"    >
  <img src={butaca1}/>
  <img src="https://picsum.photos/id/1011/400/300" alt="a girl doing kayak"/>
  <img src="https://picsum.photos/id/124/400/300" alt="a small boat in the sea"/>
  <img src="https://picsum.photos/id/235/400/300" alt="a mountain"/>
  <img src="https://picsum.photos/id/423/400/300" alt="a forest"/>
       </div></a>
         </p>;
      case 'otros':
        return <p><h1>Otros</h1>
            <a   href="https://www.instagram.com/jmvimports_llantas/" target="_blank"  > <div class="gallery"    >
  <img src="https://picsum.photos/id/199/400/300"   alt="the beach"/>
  <img src="https://picsum.photos/id/1011/400/300" alt="a girl doing kayak"/>
  <img src="https://picsum.photos/id/124/400/300" alt="a small boat in the sea"/>
  <img src="https://picsum.photos/id/235/400/300" alt="a mountain"/>
  <img src="https://picsum.photos/id/423/400/300" alt="a forest"/>
       </div></a>
        </p>;
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
