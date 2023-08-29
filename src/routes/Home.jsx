import React from 'react'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Carrusel from '../components/carrusel/Carrusel'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Carrusel/>
    <Footer/>
    </>
  )
}

export default Home