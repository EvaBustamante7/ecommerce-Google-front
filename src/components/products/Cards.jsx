import React, { useState, useEffect } from "react";
import "./css/cardview.css"; 

const Cards = ({ handleClick }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h3 className="product-title">{product.name}</h3>
          <img
            src={`http://127.0.0.1:8000/uploads/brochures/${product.image}`}
            alt={product.name}
            className="product-image"
          />
          <p className="product-price">Precio: {product.price} €</p>
          <img
            src={`http://127.0.0.1:8000/uploads/brochures/${product.qr}`}
            alt={`${product.name} QR`}
            className="product-qr"
          />
          <div className="button-flex">
            <button onClick={() => handleClick(product)} className="button-link">
              Agregar al Carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
