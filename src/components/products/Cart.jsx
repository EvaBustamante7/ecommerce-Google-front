import React, { useState, useEffect } from "react";
import "./css/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    handlePrice(updatedCart);
  };

  const handlePrice = (items) => {
    let totalPrice = 0;
    items.forEach((product) => {
      totalPrice += product.amount * product.price;
    });
    setPrice(totalPrice);
  };

  useEffect(() => {
    handlePrice(cart);
  }, [cart]);

  return (
    <article>
      {cart.map((product) => (
        <div className="cart_box" key={product.id}>
          <div className="cart_img">
            <img src={`http://127.0.0.1:8000/uploads/brochures/${product.image}`} alt={product.name} />
            <p>{product.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(product, 1)}>+</button>
            <button>{product.amount}</button>
            <button onClick={() => handleChange(product, -1)}>-</button>
          </div>
          <div>
            <span>{product.price} €</span>
            <button onClick={() => handleRemove(product.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total de tu compra</span>
        <span>{price} €</span>
      </div>
    </article>
  );
};

export default Cart;
