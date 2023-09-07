import React, { useEffect, useState } from "react";
import '../assets/sass/components/_desplegable.scss';
import logo from '../assets/images/logo.png';
import { Icon } from '@iconify/react';
import { Cart } from "./Cart";

export const Desplegable = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
    };
  }, []);

  return (
    <nav className={toggle ? "desplegable expanded" : "desplegable"}>
      <img className="logo" src={logo} alt="SmartFood" />
      <div className="toggle-icon" onClick={handleToggle}>
        <ul className='icons-nav' style={{ display: "flex", alignItems: "center" }}>
          <li className="float-shadow icon-nav">
            <Cart
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          </li>
          <li className="float-shadow icon-nav">
            <a href="/login" onClick={() => window.dataLayer.push({'event': 'menu_login'})}>
              <Icon icon="teenyicons:user-circle-solid" width="28" height="28" />
            </a>
          </li>
          <li className="float-shadow icon-nav">
            {toggle ? <Icon icon="material-symbols:close-rounded" className='menu' width="30" height="30" /> : <Icon icon="ic:round-menu" className='menu' width="32" height="32" />}
          </li>
        </ul>
      </div>
      <ul className="links">
        <li className="float-shadow">
          <a href="/" onClick={() => window.dataLayer.push({'event': 'menu_home'})}>Inicio</a>
        </li>
        <li className="float-shadow">
          <a href="/products">Productos</a>
        </li>
        <li className="float-shadow">
          <a href="/contact" onClick={() => window.dataLayer.push({'event': 'menu_contact'})}>Contacto</a>
        </li>
      </ul>
      <ul className='icons-desk'>
        <li className="float-shadow icon-desk">
          {windowWidth > 768 ? (
            <Cart
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          ) : null}
        </li>
        <li className="float-shadow icon-desk">
          {windowWidth > 768 ? (
            <a href="/login">
              <Icon icon="teenyicons:user-circle-solid" width="28" height="28" />
            </a>
          ) : null}
        </li>
      </ul>
    </nav>
  );
};
