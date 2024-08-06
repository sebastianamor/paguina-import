import React from 'react';

function Map() {
  return (
    <div className="map">
      <h2>Ubicación</h2>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.545683357234!2d-70.72757091165589!3d-33.51319543203912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dca6764076cf%3A0xe0e14e7222a89223!2sSeraf%C3%ADn%20Zamora%200310%2C%2035%2C%209260045%20Santiago%2C%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sjp!4v1722258525564!5m2!1ses!2sjp"
        width="400"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
