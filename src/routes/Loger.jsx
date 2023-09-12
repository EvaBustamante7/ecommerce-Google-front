import React, {useState} from 'react'
import Log from '../components/login-register/Log'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { useThemeContext } from '../context/ThemeContext'


const Loger = () => {
  const {contextTheme} = useThemeContext()    
  const [cart] = useState([]);
  return (
    
    <>
    <div>{contextTheme}</div>
    <Navbar/>
    <Navbar size={cart.length}/>
    <Log/>
    <Footer />
    </>
  )
}

export default Loger