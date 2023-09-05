import React from 'react';
import './css/modelviewer.css'


function ModelViewer() {
  return (
    <div>
      <div className="contenedor">
        <div className="widget-1">
          <h2>Experiencia inmersiva</h2>
          <p>Google nos da la oportunidad gracias a la tecnología Model Viewer de poder disfrutar de una experiencia inmersiva en tu casa, únicamente necesitaras un móvil para vivir esta experiencia.</p>
        </div>
        <div className="widget-2">
          <iframe
            id="model_viewer"
            title="card1"
           
            src="https://model-viewer-brown.vercel.app/"
          ></iframe>
        </div>
      </div>

    </div>

  );
}

export default ModelViewer;