import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import escultura from '../assets/escultura.jpg'
import pintura from '../assets/Pintura.jpg'
import allcategories from '../assets/galeria.png'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
     <h1>Productos</h1>
    <div className='container'>
      <div className='product-list'>
        {products.map(product => (
          <div className='product' key={product.id}>
            <Link to={`/products/${product.id}`} onClick={() => window.dataLayer.push({ 'event': 'detail_product_view' })}>
              <h3>{product.name}</h3>
              <img src={`https://127.0.0.1:8000/uploads/brochures/${product.image}`} alt={product.name} />
              <img src={`https://127.0.0.1:8000/uploads/brochures/${product.qr}`} alt={`${product.name}QR`} />
              <p>Precio: {product.price} €</p>
            </Link>
            <button onClick={() => addToCart(product)}>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default ProductList;