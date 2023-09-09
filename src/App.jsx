import React from 'react';
import { Routes, Route,Router } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Inmersiva from './routes/Inmersiva';
// import Products from './routes/Products';
import Obj3d from './routes/Obj3d'
import About from './components/about/About';
// import Productdetail from './routes/Productdetail';
import Loger from './routes/Loger';
import Regroute from './routes/Regroute';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import {ProductList} from './components/products/ProductList';
import {ShoppingCart} from './components/products/ShoppingCart';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div>
      <ShoppingCartProvider>
        
   
      <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/inmersiva' element={<Inmersiva/>} />
        {/* <Route path='/products' element={<Products/>} /> */}
        {/* <Route path='/products/:id' element={<Productdetail/>} /> */}
        <Route path='/register' element={<Regroute/>} />
        <Route path='/objeto' element={<Obj3d/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/log' element={<Loger/>} />
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />

      </Routes>
   
      </ShoppingCartProvider>
    </div>
  );
}


export default App;
