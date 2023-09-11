import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import Logo from '../logo/G3DA.svg';
import './css/Navbar.css';
//import ReactSwitch from 'react-switch';
import Switch from 'react-switch'
import { useThemeContext } from '../../context/ThemeContext';

const Navbar = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === 'Light' ? 'Dark' : 'Light'));
    setChecked(nextChecked);
  };

  console.log(contextTheme)
  console.log(checked)

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener('scroll', changeColor);

    return () => {
      // Limpia el listener al desmontar el componente
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

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
          <Link to='/shop'>
            <FaShoppingCart size={25} style={{ color: 'black', margin: '0 10px' }} />
          </Link>
        </div>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='https://framevr.io/hhj-ist-euq'>Metaverso</Link>
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
          <Link className='hide-icons' to='/shop'>
            <FaShoppingCart size={25} style={{ color: 'black' }} />
          </Link>
        </li>
      </ul>
      <div>

        
        
        <button
          //onClick={handleSwitch}
          //checked={checked}
        
          className='react-switch'
          id='material-switch'
        >click</button>

        <Switch 
            onChange={handleSwitch}
            checked={checked}
        />

      </div>
    </div>
  );
};

export default Navbar;
