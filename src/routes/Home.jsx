import React from 'react'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Carrusel from '../components/carrusel/Carrusel'
import  imagen from '../components/assets/ARCO.webp'
import  imagen1 from '../components/assets/imagenes1.jpg'
import Metaverso from '../components/Metaverso/Metaverso'
import Metaverso1 from '../components/assets/Metaverso.mp4'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner
     title="Google 3D Aesthetic "
     text="Te invita a explorar su ecommerce. Donde encontrarás NFTs únicos diseñados por talentosos artistas 3D, que van desde cautivadoras esculturas digitales hasta innovadoras obras de arte.  ofreciendo una variada gama de pinturas y esculturas que desarrollan la creatividad en todas sus formas."
     image={imagen}
     showButton={false} buttonText="Leer más" />
    <Carrusel/>
    <Metaverso
     title="Metaverso"
     text="Google 3D Aesthetic te invita a su espacio en el metaversaso. Participa de nuestra experiencia más virtual e interacciona con artistas y coleccionistas como tú."
     video={Metaverso1}
     showButton={true}
     buttonText="Entra"
     href="https://framevr.io/hhj-ist-euq"/>
    <Banner
     title="Experiencia inmersiva"
     text="Nuestro museo virtual es un espacio donde la innovación y el arte convergen para ofrecerte una experiencia única. Podrás explorar las diferentes obras de arte, interactuar con ellas y descubrir nuevas perspectivas artísticas. ¡Bienvenido a este emocionante viaje artístico en nuestro museo virtual! Puedes experimentar una experiencia inmersiva única que combina arte, innovación y tecnología."
     image={imagen1}
     showButton={true} buttonText="Leer más" />
    <Footer/>
    </>
  )
}

export default Home