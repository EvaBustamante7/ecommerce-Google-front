import React, {useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import Reg from '../components/login-register/Reg'
import Footer from '../components/footer/Footer'

const Regroute = () => {
  const [cart] = useState([]);

  return (
    <>
    <Navbar size={cart.length}/>
    <Reg/>
    <Footer/>
    </>
  )
}

export default Regroute