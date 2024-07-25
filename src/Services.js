import React, { useState } from 'react';
import './Services.css';
import { FaBalanceScale } from "react-icons/fa";
import civil from './imagenes/civil.jpeg'
import familia from './imagenes/familia.jpeg'
import laboral from './imagenes/laboral.jpeg'
import penal from './imagenes/penal.jpeg'

function Services() {
  const [message, setMessage] = useState('');

  const handleButtonClick = (service) => {
    let msg = '';
    switch (service) {
      case 'asesoria':
        msg = <div><p>  <h1>Derecho Penal</h1> </p>
            <p>Dppj se especializa en litigios de alta complejidad a nivel nacional e internacional. El estudio
               otorga asesoría especializada en delitos económicos, tributarios, violaciones a leyes anti-
               corrupción, lavado de activos, e infracciones a leyes de propiedad industrial e intelectual, entre
               otros. </p>
               <p>
               contamos con un equipo penal multidisciplinario, lo que le permite representar a imputados y
               víctimas, desde una etapa temprana, en materia de prevención y análisis de riesgos, así como
               con una adecuada planificación, proceso de investigación interna y reacción estratégica frente
               a una contingencia penal, representando los intereses de los clientes ante instancias
               administrativas y judiciales a lo largo de todo el territorio nacional. </p></div>
            
        break;
      case 'representacion':
        msg = <div><p><h1>Derecho Civil</h1></p>
               <p>Civil, brindamos un completo apoyo a demandantes o demandados en sus causas,
                proporcionando una solución rápida y oportuna a sus problemas y necesidades.
                Juicios de Arrendamiento </p>
                <ul>
                  <li><FaBalanceScale /> Prescripción de Deudas</li>
                  <li><FaBalanceScale /> Precarios
                  Cambio de nombre</li>
                  <li><FaBalanceScale /> Cobro de Honorarios</li>
                  <li><FaBalanceScale /> Indemnización de Perjuicios
                      Responsabilidad Extracontractual</li>
                      <li><FaBalanceScale /> Asesoría Inmobiliaria</li>
                  </ul></div>
        break;
      case 'consultoria':
        msg = <div><p><h1>Derecho de Familia</h1></p>
                  <p>En materia sobre derecho de Familia tendrás soluciones legales efectivas para problemas de
                   familia. Nuestro equipo de abogados te acompaña, asesora y protege tus derechos en casos
                   de deuda de pensión de alimentos, cuidado personal, divorcio, violencia intrafamiliar,
                   adopciones y mucho más.</p>
                   <ul>
                    <li><FaBalanceScale /> Divorcios</li>
                    <li><FaBalanceScale /> Alimentos</li>
                    <li><FaBalanceScale /> Cuidado Personal</li>
                    <li><FaBalanceScale /> Relación directa y regular</li>
                    <li><FaBalanceScale /> Autorización de salida del país</li>
                    <li><FaBalanceScale /> Violencia Intrafamiliar</li> 
                    <li><FaBalanceScale /> Medidas de Protección</li></ul></div>;
        break;
      case 'redaccion':
        msg = <div><p><h1>Derecho Laboral</h1></p>
               <p>En materia sobre derecho laboral, contamos con amplia experiencia en procesos de
                  contratación y terminación de trabajadores (individuales y masivas), paquetes de
                  compensación (incluyendo planes de acciones) cumplimiento legal, subcontrataciones,
                  políticas corporativas, asuntos laborales derivados y/o asociados a fusiones y adquisiciones,
                  investigaciones internas, asuntos de seguridad social e impuestos a los trabajadores.
                  participamos activamente en procesos de negociación colectiva en empresas de diferentes
                  rubros y también asesora a clientes en juicios y reclamaciones laborales, incluyendo litigios
                  y procedimientos administrativos derivados de accidentes laborales y enfermedades 
                  profesionales.
                  En materia de subcontratación de servicios, asesoramos permanentemente a empresas
                  subcontratistas y propietarios en proyectos relativos a estas materias, identificando y
                  mitigando riesgos y responsabilidades legales asociadas.</p>
                  <ul>
                    <li><FaBalanceScale /> Asesoría Laboral a Empresas</li>
                    <li><FaBalanceScale /> cobranza laboral y previsional</li>
                    <li><FaBalanceScale /> Abogados Trabajadores</li>
                    <li><FaBalanceScale /> Despido injustificado</li>
                    <li><FaBalanceScale /> Accidente laboral y enfermedad Profesional</li>
                    <li><FaBalanceScale /> Tutela Laboral</li></ul></div>
        break;
      default:
        msg = '';
    }
    setMessage(msg);
  };

  return (
    <section className="services">
      <h2>Servicios</h2>
      <div className="service-buttons">
        <button onClick={() => handleButtonClick('asesoria')}> <img src={penal} alt="civ" className="civ"/>   Derecho Penal</button>
        <button onClick={() => handleButtonClick('representacion')}> <img src={civil} alt="civ" className="civ"/>  Derecho Civil </button>
        <button onClick={() => handleButtonClick('consultoria')}> <img src={familia} alt="civ" className="civ"/>  Derecho de Familia</button>
        <button onClick={() => handleButtonClick('redaccion')}> <img src={laboral} alt="civ" className="civ"/> Derecho Laboral</button>
      </div>
      {message && <p className="service-message">{message}</p>}
    </section>
  );
}

export default Services;