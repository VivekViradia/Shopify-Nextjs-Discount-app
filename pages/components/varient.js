import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Product from "./products";

function App() {
  const [getProducts, setGetProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/shopify");
      const data = await res.json();
      console.log("data ", data)
      setGetProducts(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="product-grid" >
        {getProducts && getProducts.length > 0 && getProducts.map((product, index) => (
          <Product key={index} products={product} />
        ))}
      </div>
    </>
  );
}

export default App;
