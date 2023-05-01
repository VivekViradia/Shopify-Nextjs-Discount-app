import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Product from "./products";

function App() {
  const [getProducts, setGetProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/shopify");
      const data = await res.json();
      setGetProducts(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="product-grid" >
        {getProducts.map((product, index) => (
          <Product key={index} products={product} />
        ))}
      </div>
    </>
  );
}

export default App;
