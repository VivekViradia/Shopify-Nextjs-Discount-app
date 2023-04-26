import React, { useState } from "react";

const Product = ({ products }) => {
const [varientsID,setVarientsID] = useState([])

  return (
    <div className="product-grid-container">
      {products?.image && products?.image?.src ? (
        <img
          src={products.image.src}
          alt="Product Image"
          widp={200}
          height={200}
        />
      ) : (
        <img src="/No Image.jpg" alt="Product Image" widp={200} height={200} />
      )}
      <h3>Name: {products.handle}</h3>
      {!products.body_html ? (
        <p>Description: Null</p>
      ) : (
        <p>Description:{products.body_html}</p>
      )}
      <p>Manufacturing Date:{products.created_at.slice(0, 10)}</p>
      <p>Status: {products.status}</p>
      {products.variants && products.variants.length == 1 ? (
        products?.variants?.map((vart, index) => (
          <p key={index}>Price:{vart?.price}</p>
        ))
      ) : ( 
        //   <button onClick={(vart) => handleOnClicked(vart)}>
        //     Load More variants
        //   </button>

        <p>Also Avaiable in Different Varients</p>
      )}
    </div>
  );
};

export default Product;