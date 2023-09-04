import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>Precio: {product.price}</p>
          <img src={product.image} alt={product.name} />
          <img src={product.qr} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;