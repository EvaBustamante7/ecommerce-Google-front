import React from 'react';
import './css/Metaverso.css';

const Metaverso = (props) => {
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
                <video controls>
                    <source src={props.video} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
                {props.showButton && (
                    <a href={props.href} className="button-link">
                        {props.buttonText}
                    </a>
                )}
            </div>
        </div>
    );
};
export default Metaverso;