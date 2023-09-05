import React from 'react';
import './css/logoviewer.css'


function LogoViewer() {
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
            id="logo_viewer"
            title="card2"
           
            src="https://logo-viewer.vercel.app/"
          ></iframe>
        </div>
      </div>

    </div>

  );
}

export default LogoViewer;