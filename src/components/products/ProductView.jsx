import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';

const DetailsProduct = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://127.0.0.1:8000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));

    AOS.init({
      duration: 1500
    });
  }, [id]);

  const onAddProduct = (product) => {
    let productToAdd = {
      ...product,
      quantity: 1,
      price: product.price
    };

    let productIndex = allProducts.findIndex((item) => item.id === productToAdd.id);

    if (productIndex !== -1) {
      const products = [...allProducts];
      //products[productIndex].quantity += productToAdd.quantity;
      setTotal(total + productToAdd.price);
      setCountProducts(countProducts + 1);
      return setAllProducts(products);
    }

    setTotal(total + productToAdd.price);
    setCountProducts(countProducts + 1);
    setAllProducts([...allProducts, productToAdd]);
  };

  return (
    <div data-aos="fade-down" key={product.id}>
      <div className="fruit-detail">
        <div className="fruit-card">
          <img src={`https://127.0.0.1:8000/uploads/brochures/${product.image}`} alt={product.name} className="fruit-detail__image zoom-image" />
          <img src={`https://127.0.0.1:8000/uploads/brochures/${product.qr}`} alt={product.name} className="fruit-detail__image zoom-image" />
          <div className="p-fruits">
            <div className="text">
              <h2 className="fruit-detail__title">{product.name}</h2>
              <h2 className="fruit-detail__title">{product.price}</h2>
              <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
            
            </div>
            <p><a className='back-to-shop' href="/products">Seguir comprando</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;