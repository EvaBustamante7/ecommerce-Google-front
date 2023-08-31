import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Inmersiva from './routes/Inmersiva';
import Login from './routes/Login';
import Register from './components/register/Register'
import Obj3d from './routes/Obj3d'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/inmersiva' element={<Inmersiva/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/objeto' element={<Obj3d/>} />

      </Routes>
    </div>
  );
}


export default App;
