import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import allcategories from '../assets/images/todas-categorias.jpg'
// import '../assets/sass/components/_productlist.scss'

export const ProductList = ({
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


	useEffect(() => {
		fetch('https://prueba.coderf5.es/api/categories')
			.then(response => response.json())
			.then(data => setCategories(data))
			.catch(error => console.error(error));
	}, []);

	useEffect(() => {
		
		fetch(`https://127.0.0.1:8000/api/products`)
		.then(res => res.json())
		.then(data => setProducts(data))
		.catch(err => console.log(err));
		
		
	})
	
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

	// Filter List
	const handleCategoryClick = (category) => {
		setCategory(category);
	};
	// Select Filter
	const handleCategoryChange = event => {
		const newCategory = event.target.value;
		console.log('Selected category:', newCategory);
		setCategory(newCategory);
	};

	// Search input
	const handleSearchInputChange = event => {
		setSearchTerm(event.target.value);
	};

	const handleSearchClear = () => {
		setSearchTerm('');
	};

	return (
		<div className='container-products'>
			<div className='categories-mobile'>
				<p>Filtar por Categorias</p>
				<select value={category} onChange={handleCategoryChange}>
					<option value=''>Todas las categorías</option>
					{categories.map(category => (
						<option key={category.id} value={category.typecategory}>
							{category.typecategory}
						</option>
					))}
				</select>
			</div>
			<ul className='container-categories categories-desktop'>
				<li className='item-category' onClick={() => {handleCategoryClick(''); window.dataLayer.push({'event': 'select_category_all'});}}>
					{/* <img src={allcategories} alt="" /> */}
					<span>Todas</span>
				</li>
				{categories.map(category => (
					<li key={category.id} onClick={() => {handleCategoryClick(category.typecategory); window.dataLayer.push({'event': 'select_category'});}} className='item-category'>
						<img src={`https://127.0.0.1:8000/uploads/brochures/${category.image}`} alt={category.typecategory} />
						<span>{category.typecategory}</span>
					</li>
				))}
			</ul>
			<div className='inputSearch'>
				<input className='search-input' type='text' placeholder='Buscar productos...' value={searchTerm} onChange={handleSearchInputChange} />
				<button className='search-button' onClick={handleSearchClear}>Limpiar</button>
			</div>
			<div className='container-items'>
				{products.map(product => (
					<div className='item' key={product.id}>
						<Link to={`/products/${product.id}`} key={product.id} onClick={window.dataLayer.push({'event': 'detail_product_view'})}>
							<figure>
								<img src={`https://127.0.0.1:8000/uploads/brochures/${product.image}`} alt={product.name} />
							</figure>
						</Link>
						<div className='info-product'>
							<Link to={`/products/${product.id}`} key={product.id} onClick={window.dataLayer.push({'event': 'detail_product_view'})}>
								<div className='name-price'>
									<h3 className='product-name'>{product.name}</h3>
									<p className='price'>{product.price} € <span>/Kilo</span></p>
								</div>
							</Link>
							<button onClick={() => {onAddProduct(product); window.dataLayer.push({'event': 'add_to_cart'});}}>
								Añadir al carrito
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList