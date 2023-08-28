import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../logo/G3DA.svg'
import './css/Navbar.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor =() => {
        if(window.scrollY >= 100 ) {
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
                <Link to='/weather'>Weather</Link>
            </li>
            <li>
                <Link to='/productos'>Productos</Link>
            </li>
            <li>
                <Link to='/inmersiva'>Inmersiva</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: 'white'}} />) : <FaBars size={20} style={{color: 'black'}}/> }
            
        </div>
    </div>
  )
}

export default Navbar