import React, {useState} from 'react'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Carrusel from '../components/carrusel/Carrusel'
import  galeria from '../components/assets/galeria.png'
import ModelViewer from '../components/modelviewer/model_viewer'
import LogoViewer from '../components/logoViewer/logoViewer'
import Metaverso from '../components/Metaverso/Metaverso'
import Metaverso1 from '../components/assets/Metaverso.mp4'


const Home = () => {
  const [cart] = useState([]);
  return (
    <>
    <Navbar size={cart.length}/>
    <LogoViewer/>
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
     text="Nuestro museo virtual es un espacio donde la innovación y el arte convergen para ofrecerte una experiencia única. Gracias a Three js podrás  descubrir un nuevo espacio digital."
     image={galeria}
    showButton={true}
    buttonText="Entra" 
    href="/inmersiva"/>
    <Footer/>
    </>
  )
}

export default Home