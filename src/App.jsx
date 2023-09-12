import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Inmersiva from './routes/Inmersiva';
import Obj3d from './routes/Obj3d'
import About from './components/about/About';
import Cookies from './components/cookies/Cookies';
import Privacy from './components/privacy-policy/Privacy';
import Loger from './routes/Loger';
import Regroute from './routes/Regroute';
import ScrollToTop from './Scroll/ScrollToTop';
import Products from './routes/Products';
import { useThemeContext } from './context/ThemeContext';
import '../src/index-css/index.css';



function App() {
  const {contextTheme, setContextTheme} = useThemeContext()
 
  return (
    <div id={contextTheme}>
      <ScrollToTop/>
       
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/inmersiva' element={<Inmersiva/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/register' element={<Regroute/>} />
          <Route path='/objeto' element={<Obj3d/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/log' element={<Loger/>} />
          <Route path='/cookies' element={<Cookies/>} />
          <Route path='/privacy-policy' element={<Privacy/>} />
        </Routes>

      <ScrollToTop />
        
      

    </div>
  );
}


export default App;