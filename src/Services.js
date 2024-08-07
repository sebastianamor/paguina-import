import React, { useState } from 'react';
import './Services.css';
import llantas from './imagenes/llantas de autos.jpg'
import neumaticos from './imagenes/neumaticos.jpg'
import butacas from './imagenes/butacas racer.jpg'
import otros from './imagenes/otros auto.jpg'


function Services() {
  const [message, setMessage] = useState('');

  const handleButtonClick = (service) => {
    let msg = '';
    switch (service) {
      case 'llantas':
        msg = <p>  <h1>llantas</h1> </p>
            
        break;
      case 'neumaticos':
        msg = <p><h1>neumaticos</h1></p>
              
        break;
      case 'butacas':
        msg = <p><h1>butacas</h1></p>
                  
        break;
      case 'otros':
        msg = <div><p><h1>otros</h1></p>
               </div>
        break;
      default:
        msg = '';
    }
    setMessage(msg);
  };

  return (
    <section className="services">
      <h2>Productos</h2>
      <div className="service-buttons">
        <button onClick={() => handleButtonClick('llantas')}> <img src={llantas} alt="civ" className="civ"/>llantas</button>
        <button onClick={() => handleButtonClick('neumaticos')}> <img src={neumaticos} alt="civ" className="civ"/> neumaticos </button>
        <button onClick={() => handleButtonClick('butacas')}> <img src={butacas} alt="civ" className="civ"/>  butacas</button>
        <button onClick={() => handleButtonClick('otros')}> <img src={otros} alt="civ" className="civ"/> otros</button>
      </div>
      {message && <p className="service-message">{message}</p>}
    </section>
  );
}

export default Services;