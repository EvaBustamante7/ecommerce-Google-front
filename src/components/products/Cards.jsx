import React, { useState, useEffect } from "react";

const Cards = ({ handleClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los productos
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
  <div className='product-list'>
            {products.map(product => (
              <div className='product' key={product.id}>
                <h3>{product.name}</h3>
                <img src={`http://127.0.0.1:8000/uploads/brochures/${product.image}`} alt={product.name} />
                <img src={`http://127.0.0.1:8000/uploads/brochures/${product.qr}`} alt={`${product.name}QR`} />

                <p>Precio: {product.price} €</p>
                <button onClick={() => handleClick(product)}>Add to Cart</button>
                
              </div>
            ))}
          </div>

    // <div className="cards">
    //   {products.map((product) => (
    //     <div key={product.id} className="product-card">
    //       <div className="image_box">
    //         <img src={product.img} alt="" />
    //         <img src={product.qr} alt="" />
    //       </div>
    //       <div className="details">
    //         <p>{product.name}</p>
    //         <p>Price - {product.price}Rs</p>
    //         <button onClick={() => handleClick(product)}>Add to Cart</button>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Cards;
