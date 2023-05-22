import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

function Discount() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [getProducts, setGetProducts] = useState([]);
  const [finalPrice, setFinalPrice] = useState('');

  const useQuery = () => {
    const router = useRouter();
    const ready = router.asPath != router.route;
    if (!ready) return null;
    return router.query;
  };

const query = useQuery()

  useEffect(() => {
    if (!query) {
      return
    }
    console.log("my query exits!!",query)
  },[query])

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

    // Set the final price state
    setFinalPrice(finalPrice.toFixed(2));

    // Reset the form
    setOriginalPrice('');
    setDiscountPercentage('');
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
    (obj) => obj.id === parseInt(productID.id)
  );
  
console.log("kjsv",filterProductDataByID)

  return (
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="originalPrice">Original Price:</label>
    //   <input
    //     type="number"
    //     id="originalPrice"
    //     value={originalPrice}
    //     onChange={handleOriginalPriceChange}
    //     required
    //   />

    //   <label htmlFor="discountPercentage">Discount (%):</label>
    //   <input
    //     type="number"
    //     id="discountPercentage"
    //     value={discountPercentage}
    //     onChange={handleDiscountPercentageChange}
    //     required
    //   />

    //   <button type="submit">Calculate Discount</button>

    //   {finalPrice && <p>Final Price: {finalPrice}</p>}
    // </form>
    // {
    //   filterProductDataByID.map((products) => {
    //     <>
    //     </>
    //   })
    // }
    <h1>df</h1>
  );
}

export default Discount;
