import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [total, setTotal] = useState({});
  const [countProducts, setCountProducts] = useState({});
  const [cart, setCart] = useState({});

  return (
    <ProductContext.Provider value={{ product, setProduct, total, setTotal, countProducts, setCountProducts, cart, setCart  }}>
      {children}
    </ProductContext.Provider>
  );
};