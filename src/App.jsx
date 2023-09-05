import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Inmersiva from './routes/Inmersiva';
import Login from './routes/Login';
import Products from './routes/Products';


import Register from './components/register/Register'
import Obj3d from './routes/Obj3d'
import About from './components/about/About';
import Logreg from './components/login-register/Logreg';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/inmersiva' element={<Inmersiva/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/objeto' element={<Obj3d/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/prueba' element={<Logreg/>} />


      </Routes>
    </div>
  );
}


export default App;
