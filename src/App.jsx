import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Inmersiva from './routes/Inmersiva';
import Products from './routes/Products';
import Obj3d from './routes/Obj3d'
import About from './components/about/About';
import Loger from './routes/Loger';
import Regroute from './routes/Regroute';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/inmersiva' element={<Inmersiva/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/register' element={<Regroute/>} />
        <Route path='/objeto' element={<Obj3d/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/log' element={<Loger/>} />


      </Routes>
    </div>
  );
}


export default App;
