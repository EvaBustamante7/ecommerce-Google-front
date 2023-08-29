import React from 'react';
import './css/Banner.css';
import escultura2 from './img/ARCO.webp';

const Banner = () => {
  return (
    <div className="contenedor">
      <div className="widget-1">
        <h2>Información de la Compañía</h2>
        <p>
          Google 3D Aesthetic es una empresa que te invita a explorar un nuevo horizonte artístico en su ecommerce. Encontrarás NFTs únicos diseñados por talentosos artistas 3D, que van desde cautivadoras esculturas digitales hasta innovadoras obras de arte. Sumérgete en la experiencia de coleccionar estas piezas digitales exclusivas o lleva tu favorita al mundo tangible imprimiéndola con materiales recomendados por el artista. Además, su selección se extiende más allá de los NFTs, ofreciendo una variada gama de pinturas, esculturas y moda que celebran la creatividad en todas sus formas. En Google 3D Aesthetic, la innovación y el arte convergen para ofrecerte una experiencia única.
        </p>
        <button>Leer más</button>
      </div>
      <div className="widget-2">
        <img src={escultura2} alt="escultura Img" />
      </div>
    </div>   
  );
};
export default Banner;