import React from 'react';
import './Footer.css';
import { FcPhone } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
          <h3></h3>
          <p>
            
          </p>
     
      <a href="https://www.instagram.com/jmvimports_llantas/" target="_blank" rel="noopener noreferrer" className="firma" >
       <FaInstagram icon={<FaInstagram />}  className="firma"  size={100} />
      </a>
        </div>
        <div>
      <a href="https://jp.linkedin.com/in/sebastian-jacob-moreira-vergara-7b76717a" target="_blank" rel="noopener noreferrer" className="firma"  >
      Desarrollador moreiratek< FaLinkedin icon={FaLinkedin}  className="firma" />
      </a>
    </div>
        <div className="contact-info">
          <h3>Contacto</h3>
          <ul>
            <li><FcPhone />+56 9 7692 3044  </li>
            <li> <FcAddressBook /> jmvimports01@gmail.com  </li>
            <li><FcDepartment /> </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

