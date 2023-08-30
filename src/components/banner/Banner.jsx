import React from 'react';
import './css/Banner.css';

const Banner = (props) => {
  return (
    <div className="contenedor">
      <div className="widget-1">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <button>Leer más</button>
      </div>
      <div className="widget-2">
        <img src={props.image} alt="Imagen" />
      </div>
    </div>   
  );
};
export default Banner;