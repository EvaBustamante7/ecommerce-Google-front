import React from 'react';
import './css/modelviewer.css'


function ModelViewer() {
  return (
    <div>
      <div className="contenedor">
        <div className="widget-1">
          <h2>damelo ya</h2>
          <p></p>
          <button>Leer más</button>
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