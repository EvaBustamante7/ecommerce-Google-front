import React from 'react'
import Navbar from '../navbar/Navbar'
import Banner from '../banner/Banner'
import Footer from '../footer/Footer'
import imagen from '../assets/coders.jpg'
import GoogleMaps from '../Maps/GoogleMaps'

const About = () => {
    return (
        <>
            <Navbar />
            <Banner title="Google 3D Aesthetic "
                text="Nuestro equipo de trabajo es un equipo pluridisciplinar , formado por cinco componentes amantes del arte . Nuestro equipo , se encargara de ofrecer una  una amplia variedad de NFTs únicos diseñados por talentosos artistas 3D, así como otras formas de arte como pinturas, esculturas. Nos aseguraremos de  brindar una experiencia excepcional a los clientes, permitiéndoles sumergirse en la colección de piezas digitales exclusivas o imprimir sus favoritas con materiales recomendados por los artistas. Si quieres conocer más sobre nosotros o tienes dudas, no dejes de contactar ."
                image={imagen}
            />
            <GoogleMaps/>
            <Footer />
        </>
    )
}

export default About