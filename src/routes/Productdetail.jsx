import { React, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Detail from '../components/products/Detail'
import  { useThemeContext } from '../context/ThemeContext'





const Productdetail = () => {     
  const {contextTheme} = useThemeContext()    
  const [allProducts, setAllProducts] = useState([]);
  return (
    <div>
      {contextTheme}
      <Navbar/>
      <Detail
      allProducts={allProducts}
      setAllProducts={setAllProducts}/>
      <Footer/>
    </div>
  )
}

export default Productdetail