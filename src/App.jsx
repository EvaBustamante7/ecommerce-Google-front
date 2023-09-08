import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Inmersiva from './routes/Inmersiva';
import Products from './routes/Products';
import Obj3d from './routes/Obj3d'
import About from './components/about/About';
import Productdetail from './routes/Productdetail';
import Loger from './routes/Loger';
import Regroute from './routes/Regroute';
import ScrollToTop from './Scroll/ScrollToTop';
import { CartProvider } from './components/products/CartContext';


function App() {
  return (
    <div>
      <ScrollToTop />
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/inmersiva' element={<Inmersiva />} />

          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Productdetail />} />

          <Route path='/register' element={<Regroute />} />
          <Route path='/objeto' element={<Obj3d />} />
          <Route path='/about' element={<About />} />
          <Route path='/log' element={<Loger />} />

        </Routes>
      </CartProvider>
    </div>
  );
}


export default App;
