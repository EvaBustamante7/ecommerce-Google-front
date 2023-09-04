import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Carrusel.css';
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';
import imagen4 from '../assets/imagen4.jpg';
import imagen5 from '../assets/imagen5.jpg';
import imagen6 from '../assets/imagen7.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <img src={imagen1} alt="Imagen 1" />
        </div>
        <div className="carousel-item">
          <img src={imagen2}  alt="Imagen 2" />
        </div>
        <div className="carousel-item">
          <img src={imagen3}  alt="Imagen 3" />
        </div>
        <div className="carousel-item">
          <img src={imagen4}  alt="Imagen 4" />
        </div>
        <div className="carousel-item">
          <img src={imagen5}  alt="Imagen 5" />
        </div>
        <div className="carousel-item">
          <img src={imagen6} alt="Imagen 6" />
        </div>
        {/* Agrega más imágenes según sea necesario */}
      </Slider>
    </div>
  );
};

export default Carousel;
