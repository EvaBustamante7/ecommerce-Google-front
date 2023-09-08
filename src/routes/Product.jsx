import React from 'react';
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Productslist from './Productslist';


function Product() {
  return (
    <>
      <h1>Products</h1>
      <Navbar />
      <Productslist/>
      <Footer />
    </>
  );
}

export default Product;

