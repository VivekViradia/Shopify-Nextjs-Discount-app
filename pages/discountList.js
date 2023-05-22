import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

function Discount() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [getProducts, setGetProducts] = useState([]);
  const [finalPrice, setFinalPrice] = useState("");

  const useQuery = () => {
    const router = useRouter();
    const ready = router.asPath != router.route;
    if (!ready) return null;
    return router.query;
  };

  const query = useQuery();

  useEffect(() => {
    if (!query) {
      return;
    }
    console.log("my query exits!!", query);
  }, [query]);

  const handleOriginalPriceChange = (event) => {
    setOriginalPrice(event.target.value);
  };

  const handleDiscountPercentageChange = (event) => {
    setDiscountPercentage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    // Calculate the final price after discount
    const finalPrice = price - (price * discount) / 100;
    console.log("price", price);
    console.log("discount", discount);

    // Set the final price state
    setFinalPrice(finalPrice);

    // Reset the form
    setOriginalPrice("");
    setDiscountPercentage("");
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/shopify");
      const data = await res.json();
      setGetProducts(data);
    }

    fetchData();
  }, []);

  const filterProductDataByID = getProducts.filter(
    (obj) => obj.id === parseInt(query["id"])
  );

  console.log("kjsv", filterProductDataByID);

  return (
    <div>
      {filterProductDataByID.map((product) => (
        <form onSubmit={handleSubmit} key={product.id}>
          <p>Product:{product.title}</p>

          <label>Original Price:</label>
          {product?.variants.map((vart) => (
            <input
              type="number"
              value={vart.price}
              onChange={handleOriginalPriceChange}
              key={vart.id}
            />
          ))}
          {product?.variants.map((vart) => console.log(typeof vart.price))}
          <br />
          <br />
          <label>Discount (%):</label>

          <input
            type="number"
            value={discountPercentage}
            onChange={handleDiscountPercentageChange}
            required
          />
          <br />
          <br />
          <button type="submit">Calculate Discount</button>

          {finalPrice && <p>Final Price: {finalPrice}</p>}
        </form>
      ))}
    </div>
  );
}

export default Discount;
