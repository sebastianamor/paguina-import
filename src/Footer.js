import React from 'react';
import './Footer.css';
import { FcPhone } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";


function Footer({ onSelect } ) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
        <ul>
        <li>  <button   className="bn3637 bn38 "   href='/'  onClick={() => onSelect('home')}>Inicio</button></li>
        <li>  <button   className="bn3637 bn38 "   href='/'  onClick={() => onSelect('services')}>Productos</button></li>
        <li> <button   className="bn3637 bn38 " onClick={() => onSelect('contact')}>Contacto</button></li>
        <li>  <button   className="bn3637 bn38 "  href='/'  onClick={() => onSelect('location')}>Ubicación</button></li>
        <li> <button   className="bn3637 bn38 "   href='/'  onClick={() => onSelect('blog')}>Pagos</button></li>
      </ul>

        </div>
        <div>
      <a href="https://jp.linkedin.com/in/sebastian-jacob-moreira-vergara-7b76717a" target="_blank" rel="noopener noreferrer" className="firma"  >
      Desarrollador moreiratek< FaLinkedin icon={FaLinkedin}  className="firma" />
      </a>
    </div>
        <div className="contact-info">
          <h3>Contacto</h3>
          <ul>
          <li ><i ><span ><a href="tel:+56 9 7692 3044" title="telefono contacto"><FcPhone />+56 9 7692 3044 </a></span></i></li>
          <li ><i ><span ><a href="mailto:jmvimports01@gmail.com " title="email de contacto y cotiazacion"><FcAddressBook />jmvimports01@gmail.com</a></span></i></li>
            <li ><i ><span> <a href='https://maps.app.goo.gl/9b3RjLuWcNs7agr68'  > <FcDepartment />serafin zamora 0310 , santiago maipu Bodega 10</a></span></i></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

