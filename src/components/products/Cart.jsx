import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const eliminarProducto = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
    setTotal(totalPrice);
  }, [cart]);

  return (
    <>
      <h2>Carrito de Compras</h2>
      <div className='cart'>
        {cart.map((product) => (
          <div className='cart-item' key={product.id}>
            <h4>{product.name}</h4>
            <p>Precio: {product.price} €</p>
            <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
          </div>
        ))}
        <p>Total: {total} €</p>
      </div>
    </>
  );
};

export default Cart;
