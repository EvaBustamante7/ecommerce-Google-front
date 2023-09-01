import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { BiSolidLogInCircle } from 'react-icons/bi';
import Logo from '../logo/G3DA.svg'
import './css/Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'><img id='logo' src={Logo} alt="Logo G3da" /></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/inmersiva'>3D Experience</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/login'>
                        <BiSolidLogInCircle size={25} style={{ color: 'black' }} />
                    </Link>
                </li>

                <li>
                    <Link to='/shop'>
                        <FaShoppingCart size={25} style={{ color: 'black' }} />
                    </Link>
                </li>

            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={25} style={{ color: 'black' }} />) : <FaBars size={25} style={{ color: 'black' }} />}

            </div>
        </div>
    )
}

export default Navbar