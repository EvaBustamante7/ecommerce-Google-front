import React, {useState} from 'react'
import ContactForm from '../components/contact_form/Contact_form'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Contact = () => {
  const [cart] = useState([]);
  return (
    <>      
      <Navbar size={cart.length}/>
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact