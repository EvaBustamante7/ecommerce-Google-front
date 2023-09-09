import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    fetch('https://127.0.0.1:8000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
    setTotal(totalPrice);
  }, [cart]);

  return (
    <>
      <h1>Productos</h1>
      <div className='container'>
        <div className='product-list'>
          {products.map(product => (
            <div className='product' key={product.id}>
              <h3>{product.name}</h3>
              <img src={`https://127.0.0.1:8000/uploads/brochures/${product.image}`} alt={product.name} />
              <img src={`https://127.0.0.1:8000/uploads/brochures/${product.qr}`} alt={`${product.name}QR`} />
              <p>Precio: {product.price} €</p>
              <button onClick={() => addToCart(product)}>Añadir al carrito</button>
              <Link to={`/products/${product.id}`}>Ver Detalles</Link>
            </div>
          ))}
        </div>
        {/* <h2>Carrito de Compras</h2>
        <div className='cart'>
          {cart.map(product => (
            <div className='cart-item' key={product.id}>
              <h4>{product.name}</h4>
              <p>Precio: {product.price} €</p>
            </div>
          ))}
          <p>Total: {total} €</p>
        </div> */}
      </div>
    </>
  );
};

export default ProductList;