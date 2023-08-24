import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Inmersiva from './routes/Inmersiva';
import Login from './routes/Login';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/inmersiva' element={<Inmersiva/>} />
        <Route path='/login' element={<Login/>} />
      
      </Routes>
    </div>
  );
}


export default App;
