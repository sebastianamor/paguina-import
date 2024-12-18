
import React from 'react';
import './Contact.css';
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { MdPlace } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";






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

      <textarea class="form-control" rows="10" placeholder="pregunta o cotizacion" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i ></i><span class="send-text"> <BiMailSend  size={20}/>enviar</span>
        </div>
      
      </button>
      
    </form>
    
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i ><span class="contact-text place"> <a href='https://maps.app.goo.gl/9b3RjLuWcNs7agr68'  ><MdPlace /> serafin zamora 0310 , santiago maipu Bodega 10</a></span></i></li>
          <li class="list-item"><i ><span class="contact-text phone"><a href="tel:+56 9 7692 3044" title="contacto"> <BiSolidPhoneCall />
          +56 9 7692 3044 </a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:jmvimports01@gmail.com" title="Send me an email"> <MdAlternateEmail />
          jmvimports01@gmail.com</a></span></i></li>
          
        </ul>

        
        <ul class="social-media-list">
          siguenos en  
          <a href="https://www.facebook.com/jmvimports/" target="_blank" rel="noopener" class="contact-icon"   >
           <FaFacebook  icon={<FaFacebook />}/></a>
          <a  href="https://www.instagram.com/jmvimports_llantas/"  target="_blank" class="contact-icon">
            <i  aria-hidden="true"><BiLogoInstagram /></i></a>    
        </ul>

      </div>
    
  </div>
  
</section>  


 )
}

export default Contact;
