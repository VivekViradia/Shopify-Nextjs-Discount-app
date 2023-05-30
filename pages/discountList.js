import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Discount() {
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [getProducts, setGetProducts] = useState([]);
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");

  const useQuery = () => {
    const router = useRouter();
    const ready = router.asPath !== router.route;
    if (!ready) return null;
    return router.query;
  };

  const query = useQuery();

  useEffect(() => {
    if (!query) {
      return;
    }
    console.log("my query exists!!", query);
  }, [query]);

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const applyDiscount = (product) => {
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

  console.log("filterProductDataByID", filterProductDataByID);

  return (
    <div>
      {filterProductDataByID.map((product) => (
        <div key={product.id}>
          {product?.image && product?.image?.src ? (
            <img
              src={product.image.src}
              alt="Product Image"
              width={225}
              height={225}
            />
          ) : (
            <img
              src="/No Image.jpg"
              alt="Product Image"
              width={225}
              height={225}
            />
          )}
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
            <button onClick={() => applyDiscount(product)}>Add Discount</button>
          </div>

          {finalPrice && <p>Final Price: {finalPrice}</p>}
        </div>
      ))}
    </div>
  );
}

export default Discount;
