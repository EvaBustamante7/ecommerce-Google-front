import { React, useState } from 'react';
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Productslist from '../components/products/Productslist';


function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [countProducts, setCountProducts] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <>
      <h1>Products</h1>
      <Navbar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts} />
      <Productslist 
       allProducts={allProducts}
       setAllProducts={setAllProducts}
       total={total}
       setTotal={setTotal}
       countProducts={countProducts}
       setCountProducts={setCountProducts}/>
      <Footer />
    </>
  );
}

export default Products;
