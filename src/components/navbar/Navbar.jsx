import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import Logo from '../logo/G3DA.svg';
import './css/Navbar.css';

const Navbar = ({ setShow, size }) => {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'><img id='logo' src={Logo} alt="Logo G3da" /></Link>
            <div className='nav-wrapper'>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={25} style={{ color: 'black', margin: '0 10px' }} />) : <FaBars size={25} style={{ color: 'black', margin: '0 10px' }} />}
                    <Link to='/log'>
                        <VscAccount size={25} style={{ color: 'black', margin: '0 10px' }} />
                    </Link>
                    <li onClick={() => setShow(false)}>
                    <FaShoppingCart size={25} style={{ color: 'black' }} />
                    <span>{size}</span>
                </li>
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
                <li><Link className='hide-icons' to='/log'>
                    <VscAccount size={25} style={{ color: 'black' }} />
                </Link></li>
                <li className="cart" onClick={() => setShow(false)}>
                    <FaShoppingCart className='hide-icons' size={25} style={{ color: 'black' }} />
                    <span>{size}</span>
                </li>
                {/* <div onClick={() => setShow(false)}>
                      <li className='hide-icons'>
                          <FaShoppingCart size={25} style={{ color: 'black' }} />
                      </li>
                  </div> */}


            </ul>
        </div>
    );
};

export default Navbar;