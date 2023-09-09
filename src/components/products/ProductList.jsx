import React, { useState, useEffect } from "react";
import { Item } from "./Item";
import Navbar from "../navbar/Navbar";

export const ProductList = () => {
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/products')
      .then(response => response.json())
      .then(data => setStoreItems(data))
      .catch(error => console.error(error));
  }, []);

  return (
   
    <div className="items-list">
      {storeItems.map((product, idx) => {
     
        return <Item key={product.id} {...product} />;
      })}
    </div>
   
  );
};