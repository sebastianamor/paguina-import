import React from 'react';
import './Contact.css';
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";



function Contact() {
 return (
     
  <section id="contact">
  
  <h1 class="section-header">Contacto</h1>
  
  <div class="contact-wrapper">
    
    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="nombre" name="name" value="" required></input>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          < input type="email" class="form-control" id="email" placeholder="email" name="email" value="" required></input>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="mensages" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i ></i><span class="send-text"> <BiMailSend />enviar</span>
        </div>
      
      </button>
      
    </form>
    
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i ><span class="contact-text place"> <a href='https://maps.app.goo.gl/ApeUV72qd6YA75FA9'  > serafin zamora 0310 , santiago maipu Bodega 10</a></span></i></li>
          <li class="list-item"><i ><span class="contact-text phone"><a href="tel:+56 9 7692 3044" title="Give me a call">+56 9 7692 3044 </a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">jmvimports01@gmail.com</a></span></i></li>
          
        </ul>

        
        <ul class="social-media-list">
          <li><a href="https://www.facebook.com/jmvimports/" target="_blank" rel="noopener" class="contact-icon"   >
           < FaFacebook  icon={<FaFacebook />}/></a>
          </li>
          <li><a  href="https://www.instagram.com/jmvimports_llantas/"  target="_blank" class="contact-icon">
            <i  aria-hidden="true"><BiLogoInstagram />  </i></a>
          </li>       
        </ul>

      </div>
    
  </div>
  
</section>  


 )
}

export default Contact;
