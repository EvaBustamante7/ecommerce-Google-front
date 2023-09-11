import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Banner from '../banner/Banner'
import Footer from '../footer/Footer'
import imagen from '../assets/coders.jpg'
import imagen1 from '../assets/sostenibilidad.jpg'
import GoogleMaps from '../Maps/GoogleMaps'

const About = () => {
    const [cart] = useState([]);

    return (
        <>
            <Navbar size={cart.length} />
            <Banner title="Google 3D Aesthetic "
                text="Nuestro equipo de trabajo es un equipo pluridisciplinar , formado por cinco componentes amantes del arte. Encargándonos  de ofrecerte  una amplia variedad de NFTs únicos. Nuestra misión será que disfrutes de la mejor experiencia."
                image={imagen}
            />
            <Banner title=" Sostenibilidad"
                text="Google 3D Aesthetic es una página web sostenible que combina la estética visual con el compromiso ambiental. Nuestro enfoque incluye diseño 3D eficiente, alojamiento verde, y la promoción de la sostenibilidad. Creamos una experiencia inmersiva en línea que inspira a cuidar del planeta."
                image={imagen1}
            />
            <GoogleMaps />
            <Footer />
        </>
    )
}

export default About