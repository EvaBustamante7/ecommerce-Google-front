import React, { useState, useEffect } from 'react';
console.log("estoy en product.js")

const Products = () => {
  const [dataproducts, setDataProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
    //   .then(response => response.json())
   
    .then(response => console.log(response))
      
      .then(data => setDataProducts(data['hydra:member']))
      // .catch(error => console.log('error', error));
      .catch(error => console.log('estoy en el catch'));
      
  }, []);

//   if (dataBack.length === 0) {
//     return <div>Loading...</div>;
//   }
console.log("estoy antes del return")
  return (
    <div>
    {dataproducts.map((item, index) => (
      <div className='dataProducts' key={index}>
        <h2>{item.nombre}</h2>
        {/* <img id='logo' src={`http://127.0.0.1:8000/front/front/${item.logo}`} alt={item.nombre} /> */}
      </div>
    ))}
  </div>
  );
}

export default Products;