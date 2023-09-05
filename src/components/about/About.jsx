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
                text="Nuestro equipo de trabajo es un equipo pluridisciplinar , formado por cinco componentes amantes del arte. Encargándonos  de ofrecerte una  una amplia variedad de NFTs únicos. Nuestro misión será que disfrutes de la mejor experiencia."
                image={imagen}
            />
            <GoogleMaps/>
            <Footer />
        </>
    )
}

export default About