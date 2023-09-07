import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import escultura from '../assets/escultura.jpg'
import pintura from '../assets/Pintura.jpg'
import allcategories from '../assets/galeria.png'

const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
  const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

  
  const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);
  // Search input
	const handleSearchInputChange = event => {
		setSearchTerm(event.target.value);
	};
  const handleSearchClear = () => {
		setSearchTerm('');
	};


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
            <button onClick={() => { onAddProduct(product); window.dataLayer.push({ 'event': 'add_to_cart' }); }}/>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default ProductList;