import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Detail = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
}) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const addToCart = (product) => {
        const productToAdd = {
            ...product,
            quantity: 1,
        };

        const productIndex = allProducts.findIndex((item) => item.id === productToAdd.id);
        if (productIndex !== -1) {
            const products = [...allProducts];
            products[productIndex].quantity += productToAdd.quantity;
            setCountProducts(countProducts + 1);
            return setAllProducts(products);
        }

        setCountProducts(countProducts + 1);
        setAllProducts([...allProducts, productToAdd]);
    };

    useEffect(() => {
        console.log("ID obtenido de useParams:", id); // Verifica si el id es el esperado
        fetch(`http://127.0.0.1:8000/api/products/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('No se pudieron obtener los datos del producto');
                }
                return res.json();
            })
            .then(data => {
                console.log("Datos del producto obtenidos:", data); // Verifica los datos obtenidos
                setProduct(data);
            })
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div>
            <h1>Detalles del Producto</h1>
            <div className="product-detail">
                <div className="product-card">
                    <img src={`http://127.0.0.1:8000/uploads/brochures/${product.image}`} alt={product.name} className="product-detail__image zoom-image" />
                    <div className="p-products">
                        <div className="text">
                            <h2 className="product-detail__title">{product.name}</h2>
                            <p className="product-detail__description"><strong>Descripción:</strong> {product.description}</p>
                            <p className="product-detail__price"><strong>Precio:</strong> {product.price}€</p>
                        </div>
                        <div className="add-cart">
                            <button onClick={() => addToCart(product)}>Añadir al carrito</button>
                        </div>
                        <p><Link to="/products">Seguir comprando</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
