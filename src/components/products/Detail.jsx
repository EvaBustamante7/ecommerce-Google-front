import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext'; // Importa useCart
import AOS from "aos";
import 'aos/dist/aos.css';

const Detail = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Obtiene la función addToCart del contexto
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));

    AOS.init({
      duration: 1500
    });
  }, [id]);

  const onAddProduct = () => {
    // Puedes agregar el producto al carrito utilizando la función addToCart del contexto
    addToCart(product);
  };

  return (
    <div data-aos="fade-down" key={product.id}>
      <div className="fruit-detail">
        <div className="fruit-card">
          <img src={`http://127.0.0.1:8000/uploads/brochures/${product.image}`} alt={product.name} className="fruit-detail__image zoom-image" />
          <img src={`http://127.0.0.1:8000/uploads/brochures/${product.qr}`} alt={product.name} className="fruit-detail__image zoom-image" />
          <div className="p-fruits">
            <div className="text">
              <h2 className="fruit-detail__title">{product.name}</h2>
              <h2 className="fruit-detail__title">{product.price}</h2>

              <button onClick={onAddProduct}>Añadir al carrito</button>
            </div>
            <p><a className='back-to-shop' href="/products">Seguir comprando</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
