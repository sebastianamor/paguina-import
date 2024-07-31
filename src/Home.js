import React from 'react';
import './Home.css';
import pullman from './imagenes/pullman.jpg';
import starkken from './imagenes/STARKKEN.jpg';
import vermontt from './imagenes/varmontt.jpg'
import { FcDiploma1 } from "react-icons/fc";

function Home() {
  return (
    <section className="home">
       <h2>jmv import</h2>
      <p className='iniciopag'>
      Estamos dedicados a tener las mejores llantas, neumáticos y más para tu vehiculo
      Buscando satisfacer la necesidad de personalizar, mejorar el estilo, rendimiento y performande de tu vehiculo
      </p>
      <hr></hr>
        <div className="home-text">
          <div className="inicio" >
          <p>enviamos a todo chile por </p>
          </div>
          </div>
          <div className="home-item">
          <img  src={pullman} alt='pull' className='pullmac'/>
          <img  src={starkken} alt='star' className='stark' />
          <img  src={vermontt} alt='ver'  className='vermon' />
          <div className="home-text"></div>
          <p>
            
           
          </p>
          </div>
          <hr></hr>
          <div className="home-item">
       
        <div className="home-text"></div>
        
          </div>
          <hr></hr>
          <div className="home-item">
      
        <div className="home-text">
          <div className="inicio" ></div>
          <p>
          </p>
          </div>
          </div>
    </section>
  );
}

export default Home;
