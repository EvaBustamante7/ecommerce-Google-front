import React, { useState, useEffect, Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import Cardview from "../components/products/Cardview";
import Cart from "../components/products/Cart";
import Footer from "../components/footer/Footer";

const Products = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    if (cart.some((item) => item.id === product.id)) return;
    setCart([...cart, { ...product, amount: 1 }]);
  };

  const handleChange = (product, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        const newAmount = item.amount + delta;
        if (newAmount >= 1) {
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });

    setCart(updatedCart);
  };

  useEffect(() => {
    console.log("cart change");
  }, [cart]);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.amount * product.price;
    });
    return total;
  };

  return (
    <Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Cardview handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      <Footer />
    </Fragment>
  );
};

export default Products;
