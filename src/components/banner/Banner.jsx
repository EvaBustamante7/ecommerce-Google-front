import React from 'react';
import './css/Banner.css';

const Banner = (props) => {
  return (
    <div className="contenedor">
      <div className="widget-1">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        {props.showButton && <button>{props.buttonText}</button>}
      </div>
      <div className="widget-2">
        <img src={props.image} alt="Imagen" />
        {/* <video controls>
          <source src={props.video} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video> */}
      </div>
    </div>
  );
};
export default Banner;