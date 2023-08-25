import React from 'react';
import PropTypes from 'prop-types';
import './css/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="info">
        <h2>Información de la Compañía</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur turpis at lacus cursus, eget lacinia libero volutpat.</p>
        <button>Leer más</button>
      </div>
      <div className="img">
        <img src="img.jpg" alt="Imagen del banner" />
      </div>
    </div>
  );
}
export default Banner;
