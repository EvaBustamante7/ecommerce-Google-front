import React from 'react'
import Log from '../components/login-register/Log'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { useThemeContext } from '../context/ThemeContext'


const Loger = () => {
  const {contextTheme} = useThemeContext()    
  return (
    
    <>
    <div>{contextTheme}</div>
    <Navbar/>
    <Log/>
    <Footer />
    </>
  )
}

export default Loger