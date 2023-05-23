import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

function Discount() {
  const [discount, setDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [getProducts, setGetProducts] = useState([]);


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

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const applyDiscount = () => {
    const price = parseFloat(product.variants[0].price);
    const discountValue = parseFloat(discount);

    if (!isNaN(price) && !isNaN(discountValue)) {
      const discountedPrice = price - (price * discountValue) / 100;
      setFinalPrice(discountedPrice.toFixed(2));
    }
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
        <div>
        <h2>{product.title}</h2>
        <p>{product.body_html}</p>
        <p>Vendor: {product.vendor}</p>
        <p>Price: {product.variants[0].price}</p>
  
        <div>
          <label htmlFor="discount">Discount (%):</label>
          <input
            type="number"
            id="discount"
            value={discount}
            onChange={handleDiscountChange}
          />
          <button onClick={applyDiscount}>Apply Discount</button>
        </div>
  
        {finalPrice && <p>Final Price: {finalPrice}</p>}
  
        <img src={product.image.src} alt={product.title} />
      </div>
      ))}
    </div>
  );
}

export default Discount;
