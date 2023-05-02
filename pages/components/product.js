import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ColorCircle from "./colorCircle";

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

  const productData = getProducts.filter(
    (obj) => obj.id === parseInt(productID.id)
  );

  if (productData) {
    console.log("Match found:", productData);
  } else {
    console.log("No match found.");
  }

  return (
    <div className="container">
      {productData.map((item, index) => (
        <div className="div-css row " key={index}>
          <div className="div-css col-sm-8 ">
            {item?.image && item?.image?.src ? (
              <img
                src={item.image.src}
                alt="Product Image"
                widp={700}
                height={700}
              />
            ) : (
              <img
                src="/No Image.jpg"
                alt="Product Image"
                widp={700}
                height={700}
              />
            )}
          </div>
          <div className="div-css col-sm-4 ">
            <h1>{item.title}</h1>
            <p>Description: {item.body_html}</p>
            <p>Manufacturing Date: {item.created_at.slice(0, 10)}</p>
            <p>Product Avaiablity: {item.status}</p>
            <p>Vendor: {item.vendor}</p>
            {
              item.variants && item.variants.length > 0
                ? console.log("Less than 1 Variants",item.variants.length)
                : console.log("More than 1 Variants",item.variants.length)
              // console.log ("length of Variants",item.variants.length)
            }
            <p>Colors Avaiable</p>
            <ColorCircle color="red" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
