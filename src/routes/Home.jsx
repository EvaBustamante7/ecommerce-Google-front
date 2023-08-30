import React from 'react'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Carrusel from '../components/carrusel/Carrusel'
import  imagen from '../components/assets/ARCO.webp'
import  imagen1 from '../components/assets/imagenes1.jpg'
import  imagen2 from '../components/assets/LlFD.gif'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner
     title="Google 3D Aesthetic "
     text="Google 3D Aesthetic es una empresa que te invita a explorar un nuevo horizonte artístico en su ecommerce. Encontrarás NFTs únicos diseñados por talentosos artistas 3D, que van desde cautivadoras esculturas digitales hasta innovadoras obras de arte. Sumérgete en la experiencia de coleccionar estas piezas digitales exclusivas o lleva tu favorita al mundo tangible imprimiéndola con materiales recomendados por el artista. Además, su selección se extiende más allá de los NFTs, ofreciendo una variada gama de pinturas, esculturas y moda que celebran la creatividad en todas sus formas. En Google 3D Aesthetic, la innovación y el arte convergen para ofrecerte una experiencia única."
     image={imagen}
    />
    <Carrusel/>
    <Banner
     title="Experiencia inmersiva"
     image={imagen2}
    />
    <Banner
     title="Experiencia inmersiva"
     text="Nuestro museo virtual es un espacio donde la innovación y el arte convergen para ofrecerte una experiencia única. Podrás explorar las diferentes obras de arte, interactuar con ellas y descubrir nuevas perspectivas artísticas. ¡Bienvenido a este emocionante viaje artístico en nuestro museo virtual! Puedes experimentar una experiencia inmersiva única que combina arte, innovación y tecnología."
     image={imagen1}
    />
    <Footer/>
    </>
  )
}

export default Home