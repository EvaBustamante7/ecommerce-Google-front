import React, {useState} from 'react'
import ContactForm from '../components/contact_form/Contact_form'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { useThemeContext } from '../context/ThemeContext'

const Contact = () => {
  const {contextTheme} = useThemeContext()    

  const [cart] = useState([]);
  return (
    <>   
      <div>{contextTheme}</div> 
      <Navbar size={cart.length}/>
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact;