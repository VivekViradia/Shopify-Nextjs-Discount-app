import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Product from "./products";

function App() {
  const [getProducts, setGetProducts] = useState([]);
  const [checkBox, setCheckBox] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/shopify");
      const data = await res.json();
      setGetProducts(data);
    }

    fetchData();
  }, []);

  console.log("getProducts", getProducts);

  return (
    <>
      <div className="product-grid">
        {getProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
