import React from 'react'
import ContactForm from '../components/contact_form/Contact_form'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { useThemeContext } from '../context/ThemeContext'

const Contact = () => {
  const {contextTheme} = useThemeContext()    
  return (
    
    <> 
    <div>{contextTheme}</div>     
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact