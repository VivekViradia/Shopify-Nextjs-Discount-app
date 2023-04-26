import React from 'react';

const Product = ({ product }) => {

  return (
    <div className="product">
      <h3>{product.handle}</h3>
      <p>{product.vendor}</p>
    </div>
  );
};

export default Product;