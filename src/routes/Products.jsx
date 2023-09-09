import React, { useState, useEffect, Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import Cardview from "../components/products/Cardview";
import Cart from "../components/products/Cart";
import Footer from "../components/footer/Footer";


const Products = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

   useEffect(() => {
     console.log("cart change");
   }, [cart]);

  return (
    <Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Cardview handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      <Footer/>
    </Fragment>
  );
};

export default Products;