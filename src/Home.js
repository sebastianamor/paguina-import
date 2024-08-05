import React from 'react';
import './Home.css';
import pullman from './imagenes/pullman.jpg';
import starkken from './imagenes/STARKKEN.jpg';
import vermontt from './imagenes/varmontt.jpg'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


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
          <p><h3>enviamos a todo chile por</h3> </p>
          </div>
          </div>
          <div className="home-item">
          <img  src={pullman} alt='pull' className='pullmac'/>
          <img  src={starkken} alt='star' className='stark' />
          <img  src={vermontt} alt='ver'  className='vermon' />
          <div className="home-text"></div>
          </div>
          <hr></hr>
          <div className="home-r">
        <div className="home-text"></div>
          <p>siguenos en estas redes sociales </p>
          <a href="https://www.instagram.com/jmvimports_llantas/" target="_blank" rel="noopener" className="firmai" >
          <FaInstagramSquare icon={<FaInstagramSquare />}  className="firma"  size={50} /></a>
          <a href="https://www.facebook.com/jmvimports/" target="_blank" rel="noopener noreferrer" className="firmaf" >
       <FaFacebookSquare icon={<FaFacebookSquare />}  className="firma"  size={50} /></a>
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
