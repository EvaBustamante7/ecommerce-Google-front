import React from 'react';
import './css/Banner.css';

const Banner = (props) => {
  return (
    <div className="contenedor">
      <div className="widget-1">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        {props.showButton && (
                    <a href={props.href} className="button-link">
                        {props.buttonText}
                    </a>
                )}
      </div>
      <div className="widget-2">
        <img src={props.image} alt="Imagen" />
      </div>
    </div>
  );
};
export default Banner;