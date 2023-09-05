import React from 'react'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Carrusel from '../components/carrusel/Carrusel'
import  imagen from '../components/assets/ARCO.webp'
import  galeria from '../components/assets/galeria.png'
import ModelViewer from '../components/modelviewer/model_viewer'
import LogoViewer from '../components/logoViewer/logoViewer'
import Metaverso from '../components/Metaverso/Metaverso'
import Metaverso1 from '../components/assets/Metaverso.mp4'


const Home = () => {
  return (
    <>
    <Navbar/>
    <LogoViewer/>
    <Banner
     title="Google 3D Aesthetic "
     text="Te invita a explorar su ecommerce. Donde encontrarás NFTs únicos diseñados por talentosos artistas 3D, que van desde cautivadoras esculturas digitales hasta innovadoras obras de arte.  ofreciendo una variada gama de pinturas y esculturas que desarrollan la creatividad en todas sus formas."
     image={imagen}
     showButton={false} buttonText="Leer más" />
    <Carrusel/>
    <ModelViewer/>
    <Metaverso
     title="Metaverso"
     text="Google 3D Aesthetic te invita a su espacio en el metaverso. Participa de nuestra experiencia más virtual e interacciona con artistas y coleccionistas como tú."
     video={Metaverso1}
     showButton={true}
     buttonText="Entra"
     href="https://framevr.io/hhj-ist-euq"/>
    <Banner
     title="Museo virtual"
     text="Nuestro museo virtual es un espacio donde la innovación y el arte convergen para ofrecerte una experiencia única. Gracias a Three js podrás  descubrir un nuevo espacio digital.
     Texto Banner objeto GlB."
     image={galeria}
    showButton={true}
     buttonText="Entra" 
     href="http://http://localhost:3000/inmersiva"/>
    <Footer/>
    </>
  )
}

export default Home