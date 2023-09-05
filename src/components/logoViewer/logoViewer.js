import React from 'react';
import './css/logoviewer.css'


function LogoViewer() {
  return (
    <div>
      <div className="contenedor">
        <div className="widget-1">
          <h2>Google 3D Aesthetic</h2>
          <p>Te invita a explorar su ecommerce. Donde encontrarás NFTs únicos diseñados por talentosos artistas 3D, que van desde cautivadoras esculturas digitales hasta innovadoras obras de arte.  ofreciendo una variada gama de pinturas y esculturas que desarrollan la creatividad en todas sus formas.</p>
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