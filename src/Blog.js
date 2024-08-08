import React from 'react';
import './blog.css';
import efectivo from './imagenes/handshake.jpg';
import estado from './imagenes/bancoestado.jpg';
import bci from './imagenes/bci.jpg';
import santander from './imagenes/santander.jpg';
import webpay from './imagenes/webpay.jpg';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


function Blog() {
  return (
    <section className="home">
    <h2>Metodos de pago </h2>
   <p className='iniciopag'>
   "Tenemos una variedad de métodos de pago que incluyen efectivo, tarjeta de crédito con 3 cuotas sin interés, y depósito bancario. Todo para ofrecerte una forma de pagar más fácil y agradable."
   </p>
   <hr></hr>
     <div className="home-text">
       <div className="inicio" >
       <p><h3>metodos de pago </h3> </p>
       </div>
       </div>
       <p><h3>efectivo</h3> </p>
       <div className="home-item">
       <img  src={efectivo} alt='pull' className='pullmac'/>

       <div className="home-text"></div>
       </div>
       <hr></hr>
       <p><h3>depocito bancario </h3> </p>
       <div className="home-item">
       <img  src={estado} alt='pull' className='pullmac'/>
       <img  src={bci} alt='pull' className='pullmac'/>
       <img  src={santander} alt='pull' className='pullmac'/>
       <div className="home-text"></div>
       <p></p>
       <div>
       </div>
       </div>
       <hr></hr>
       <p><h3>tajeta de credito </h3> </p>
       <div className="home-item">
       <img  src={webpay} alt='' className='webp'/>
     <div className="home-text">
       <div className="inicio" ></div>
       <p>
       </p>
       </div>
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
 </section>
  );
}

export default Blog; 
