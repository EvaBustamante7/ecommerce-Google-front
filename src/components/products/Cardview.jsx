import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import "./css/cardview.css";

const Cardview = ({ handleClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section>
      {products.map((product) => (
        <Cards key={product.id} item={product} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Cardview;
