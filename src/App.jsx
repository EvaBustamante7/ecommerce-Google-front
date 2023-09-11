import React, { useState } from 'react';
import '../src/index-css/index.css';
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
import { useThemeContext } from './context/ThemeContext';


function App() {
  const {contextTheme, setContextTheme} = useThemeContext()
  return (
    <div id={contextTheme}>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/inmersiva' element={<Inmersiva/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Productdetail/>} />
        <Route path='/register' element={<Regroute/>} />
        <Route path='/objeto' element={<Obj3d/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/log' element={<Loger/>} />

      </Routes>
    </div>
  );
}


export default App;
