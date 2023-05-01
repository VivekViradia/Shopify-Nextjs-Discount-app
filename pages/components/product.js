import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [getProducts, setGetProducts] = useState([]);
  const router = useRouter();
  const productID = router.query;

  const GetProducts = async () => {
    const response = await fetch("/api/shopify");
    const data = await response.json();
    setGetProducts(data);
  };
  useEffect(() => {
    GetProducts();
  }, []);

  const productData = getProducts.filter((obj) => obj.id === parseInt(productID.id));

  if (productData) {
    console.log("Match found:",productData);
  } else {
    console.log("No match found.");
  }

  return (
    <div className="container">
      <div className="div-css row ">
        <div className="col-sm-8 ">col-sm-8</div>
        <div className="col-sm-4 ">col-sm-4</div>
      </div>
    </div>
  );
};

export default Product;
