import React from 'react';
import './Contact.css';
import { FcPhone } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";

function Contact() {
  return (
    <form class="form" action="https://formsubmit.co/ibanez@dppjtoledoycia.cl" method="POST"    >
  <h2>CONTÁCTENOS</h2>
  <p type="Nombre:"><input placeholder="ingrese su nombre.."   name="nombre"   ></input></p>
  <p type="Email:"><input placeholder="por favor ingrese su email.."  name="email"  ></input></p>
  <p type="Mensaje:"><input placeholder="escriba su consulta.."  name="consulta"  ></input></p>
  <button>enviar</button>
  <div class="c1" >
    <span class="fa fa-phone"></span><FcPhone /> +569 92930308:
    <span class="fa fa-envelope-o"></span> <FcAddressBook />  ibanez@dppjtoledoycia.cl 
  </div>
</form>
  );
}

export default Contact;
