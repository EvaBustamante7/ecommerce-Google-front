import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
//import "../assets/sass/components/_productdetails.scss";
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
    const [selectedOption, setSelectedOption] = useState('');
    const [weight, setWeight] = useState(1);
    const [newPrice, setNewPrice] = useState(null);

    const handleOptionChange = (option, weightValue) => {
        setSelectedOption(option);
        setWeight(weightValue);
    };

    const onAddProduct = (product) => {
        let productToAdd = {
        ...product,
        quantity: 1,
        weight: selectedOption !== '' ? weight : 1, 
        price: selectedOption !== '' ? (selectedOption === '1kg' ? product.price : newPrice) : product.price,
        };

        let productIndex = allProducts.findIndex((item) => item.id === productToAdd.id);
        if (productIndex !== -1) {
            const products = [...allProducts];
            products[productIndex].quantity += productToAdd.quantity;
            products[productIndex].weight = productToAdd.weight;
            products[productIndex].price = productToAdd.price;
            setTotal(total + productToAdd.price);
            setCountProducts(countProducts + 1);
            return setAllProducts(products);
        }

        setTotal(total + productToAdd.price);
        setCountProducts(countProducts + 1);
        setAllProducts([...allProducts, productToAdd]);
    };

    useEffect(() => {
        const productsTotal = allProducts.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);

        setTotal(productsTotal);
    }, [allProducts]);

    useEffect(() => {
        if (product.price && weight) {
          setNewPrice(product.price * weight);
        }
    }, [product.price, weight]);

    useEffect(() => {
        fetch(`https://127.0.0.1:8000/api/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));

        AOS.init({
            duration: 1500
        });

    }, [id]);

    return (
        <div data-aos="fade-down" key={product.id}>
            <div className="fruit-detail">
                <div className="fruit-card">
                    <img src={`https://prueba.coderf5.es/uploads/brochures/${product.image}`} alt={product.name} className="fruit-detail__image zoom-image" />
                    <div className="p-fruits">
                        <div className="text">
                            <h2 className="fruit-detail__title">{product.name}</h2>
                            <p className="fruit-detail__origin"><strong>Descripción:</strong> {product.description}</p>
                            <p className="fruit-detail__type"><strong>Categoría: </strong>
                                {product.category && product.category.map(category => (
                                    <span key={category.id}>
                                        {category.typeCategory}
                                    </span>
                                ))}
                            </p>
                            <p className="fruit-detail__price"><strong>Precio por kilo:</strong> {product.price}€</p>
                        </div>
                        <div className="quantity-container">
                            <button
                                className={selectedOption === '0.5kg' ? 'active' : ''}
                                onClick={() => handleOptionChange('0.5kg', 0.5)}
                                >
                                0.5kg
                            </button>
                            <button
                                className={selectedOption === '1kg' ? 'active' : ''}
                                onClick={() => handleOptionChange('1kg', 1)}
                                >
                                1kg
                            </button>
                            <button
                                className={selectedOption === '3kg' ? 'active' : ''}
                                onClick={() => handleOptionChange('3kg', 3)}
                                >
                                3kg
                            </button>
                            {selectedOption !== '' && (
                                <p className="fruit-detail__price">
                                    <strong>Total:</strong> {selectedOption === '1kg' ? `${product.price}€` : `${newPrice}€`}
                                </p>
                            )}
                            <div className="add-trolley">
                                <button onClick={() => onAddProduct({...product, price: selectedOption === '1kg' ? product.price : newPrice, quantity: weight})}>Añadir al carrito</button>
                            </div>
                        </div>
                        <p><a className='back-to-shop' href="/products">Seguir comprando</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;
