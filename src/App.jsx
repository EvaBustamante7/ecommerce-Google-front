import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Inmersiva from './routes/Inmersiva';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/inmersiva' element={<Inmersiva/>} />
      
      </Routes>
    </div>
  );
}


export default App;
