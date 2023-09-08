import { useState } from 'react'
import { Icon } from '@iconify/react'
import '../assets/sass/cart.css'

export const Cart = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	return (
			<div className='container-icon-cart'>
				<div onClick={() => {setActive(!active); window.dataLayer.push({'event': 'show_cart'});}}>
					<Icon className='icon-cart' icon="ic:round-shopping-cart" width="28" height="28" />
					<div className={countProducts === 0 ? 'hidden' : 'counter-products'}>
						<span>{countProducts}</span>
					</div>		
				</div>
				
				{active && (
					<div onClick={() => setActive(!active)} className="overlay overlay-show"></div>
				)}

				<div className={`cart-container ${ active ? 'cart-open' : 'hidden-cart' }`}>
					
					{allProducts.length ? (
						<>
							<div className='cart-header'>
								<div className='cart-header-icon-title'>
									<Icon onClick={() => setActive(!active)} icon="material-symbols:close-rounded" className='close-cart-icon' width="21" height="21" />
									<h2 className='cart-header-title'>Carrito</h2>
								</div>
								<button className='btn-clear-all' onClick={onCleanCart}>
									Vaciar
									<span className="material-symbols-rounded">delete</span>
								</button>
							</div>
							<div className='row-products'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<figure>
											<img src={`https://prueba.coderf5.es/uploads/products/${product.photo}`} alt={product.name} />
										</figure>
										<div className='info-cart-product'>
											<div className='name-quantity'>
												<p className='cart-product-name'>
													{product.name}
												</p>
												<span className='cart-product-quantity'>
													Cantidad: {product.quantity}
												</span>
											</div>
											<div className='price-and-close'>
												<span className='cart-product-price'>
													{product.price} €
												</span>
												<Icon className='icon-close' onClick={() => onDeleteProduct(product)} icon="material-symbols:close-rounded" width="30" height="30" />
											</div>
										</div>
									</div>
								))}
							</div>
							<div className='cart-total'>
								<h3>Total aproximado</h3>
								<span className='total-payment'>{total} €</span>
							</div>
							<a className='link-payment' href="#">
									Finalizar la compra
							</a>
						</>
					) : (
						<div>
							<div className='cart-header'>
								<h2>Carrito</h2>
							</div>
							<h1 className='cart-empty'>Tu carrito está vacío</h1>
							<div className='keep-shop'>
								<button onClick={() => setActive(!active)}>Seguir comprando</button>
							</div>
							<div className='cart-empty-img'></div>
						</div>
						
					)}
				</div>
			</div>
	);
};