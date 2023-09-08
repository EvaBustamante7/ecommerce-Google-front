import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import Logo from '../logo/G3DA.svg';
import './css/Navbar.css';
import Cart from '../products/Cart'; // Importamos el componente Cart

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showCart, setShowCart] = useState(false); // Estado para controlar la visibilidad del componente Cart
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to='/'>
        <img id='logo' src={Logo} alt='Logo G3da' />
      </Link>
      <div className='nav-wrapper'>
        <div className='hamburger' onClick={handleClick}>
          {click ? (
            <FaTimes size={25} style={{ color: 'black', margin: '0 10px' }} />
          ) : (
            <FaBars size={25} style={{ color: 'black', margin: '0 10px' }} />
          )}
          <Link to='/log'>
            <VscAccount size={25} style={{ color: 'black', margin: '0 10px' }} />
          </Link>
          <Link to='/shop' onClick={handleCartClick}> {/* Agregamos el evento onClick para mostrar el componente Cart */}
            <FaShoppingCart size={25} style={{ color: 'black', margin: '0 10px' }} />
          </Link>
        </div>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <a href='https://framevr.io/hhj-ist-euq'>Metaverso</a>
        </li>
        <li>
          <Link to='/inmersiva'>Galería 3D</Link>
        </li>
        <li>
          <Link to='/products'>Productos</Link>
        </li>
        <li>
          <Link to='/contact'>Contacto</Link>
        </li>
        <li>
          <Link className='hide-icons' to='/log'>
            <VscAccount size={25} style={{ color: 'black' }} />
          </Link>
        </li>
        <li>
          <Link className='hide-icons' to='#' onClick={handleCartClick}> {/* Agregamos el evento onClick para mostrar el componente Cart */}
            <FaShoppingCart size={25} style={{ color: 'black' }} />
          </Link>
        </li>
      </ul>
      {showCart && <Cart />} {/* Mostramos el componente Cart si showCart es verdadero */}
    </div>
  );
};

export default Navbar;