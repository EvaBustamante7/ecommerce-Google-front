import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Inmersiva from './routes/Inmersiva';
import Login from './routes/Login';
import Products from './components/Products/Products';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/inmersiva' element={<Inmersiva/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product' element={<Products/>} />
      </Routes>
    </div>
  );
}


export default App;
