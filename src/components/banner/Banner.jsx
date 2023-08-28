import React from 'react';
import './css/Banner.css';
import { OrbitControls, useGLTF } from '@react-three/drei';
import escultura2 from './img/ARCO.jpg';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="info-container">
        <h2>Información de la Compañía</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur turpis at lacus cursus, eget lacinia
          libero volutpat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur turpis at lacus cursus, eget lacinia
          libero volutpat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur turpis at lacus cursus, eget lacinia
          libero volutpat.
        </p>
        <button>Leer más</button>
      </div>
      <div className="image-container">
        <img src={escultura2} alt="escultura Img" />
      </div>
    </div>
  );
};

export default Banner;

