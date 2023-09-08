import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/products/CartContext'; // Importa useCart
import Detail from '../components/products/Detail'; // Importa el componente Detail
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';




const Productdetail = () => {     

  const [allProducts, setAllProducts] = useState([]);
  return (
    <div>
      <Navbar/>
      <Detail/>
      <Footer/>
    </div>
  )
}

export default Productdetail