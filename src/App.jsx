import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Inmersiva from './routes/Inmersiva';
import Login from './routes/Login';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/inmersiva' element={<Inmersiva/>} />
        <Route path='/login' element={<Login/>} />
      
>>>>>>>>> Temporary merge branch 2

      </Routes>
    </div>
  );
}


export default App;
