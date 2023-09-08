import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Importa useCart

const ProductList = () => {
  const { addToCart } = useCart(); // Obtiene la función addToCart del contexto
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    fetch('http://127.0.0.1:8000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
    setTotal(totalPrice);
  }, [cart]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      <h1>Productos</h1>
      <div className='container'>
        <div className='product-list'>
          {products.map(product => (
            <div className='product' key={product.id}>
              <h3>{product.name}</h3>
              <img src={`http://127.0.0.1:8000/uploads/brochures/${product.image}`} alt={product.name} />
              <img src={`http://127.0.0.1:8000/uploads/brochures/${product.qr}`} alt={`${product.name}QR`} />
              <p>Precio: {product.price} €</p>
              <button onClick={() => handleAddToCart(product)}>Añadir al carrito</button>
              <Link to={`/products/${product.id}`}>Ver Detalles</Link>
            </div>
          ))}
        </div>
        <h2>Carrito de Compras</h2>
        <div className='cart'>
          {cart.map(product => (
            <div className='cart-item' key={product.id}>
              <h4>{product.name}</h4>
              <p>Precio: {product.price} €</p>
            </div>
          ))}
          <p>Total: {total} €</p>
        </div>
      </div>
    </>
  );
};

export default ProductList;
