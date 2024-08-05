import React from 'react';
import './Footer.css';
import { FcPhone } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
          <ul>navegador
            <li>inicio </li>
            
            <li>contacto</li>
            <li>ubicasion</li>
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
          <li class="list-item"><i ><span ><a href="tel:+56 9 7692 3044" title="telefono contacto"><FcPhone />+56 9 7692 3044 </a></span></i></li>
            <li> <FcAddressBook /> jmvimports01@gmail.com  </li>
            <li><FcDepartment />   serafin zamora 0310 , santiago  maipu
             Bodega 10 </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

