import { React, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Detail from '../components/products/Detail'




const Productdetail = () => {     

  const [allProducts, setAllProducts] = useState([]);
  return (
    <div>
      <Navbar/>
      <Detail
      allProducts={allProducts}
      setAllProducts={setAllProducts}/>
      <Footer/>
    </div>
  )
}

export default Productdetail