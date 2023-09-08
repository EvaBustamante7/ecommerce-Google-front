import React, { useEffect } from 'react';
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Productslist from '../components/products/Productslist';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/products/CartContext'; // Importa useCart



function Products() {
  return (
    <>
      <Navbar />
      <Productslist/>
      <Footer />
    </>
  );
}

export default Products;
