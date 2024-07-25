import React from 'react';

function Map() {
  return (
    <div className="map">
      <h2>Ubicación</h2>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4359386607826!2d-70.65505568479863!3d-33.441313680780704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c50cf0a3c021%3A0x108e0e8dd9be6f62!2sHu%C3%A9rfanos%201147%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1sen!2sus!4v1623765679947!5m2!1sen!2sus"
        width="1200"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
