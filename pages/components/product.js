import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ColorCircle from "./colorCircle";

const Product = () => {
  const [getProducts, setGetProducts] = useState([]);
  const [textID, setTextID] = useState();
  const [borderColor, setBorderColor] = useState("black");
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

  const handleColorCircle = (id) => {
    // console.log("handleColorCircle");
    setBorderColor("black");
    // setCircleCount()
  };

  const handleText = (id) => {
    // console.log("Text ID", id);
    setTextID(id);
  };

  return (
    <div className="container">
      {productData.map((item) => (
        <div className="div-css row " key={item.id}>
          <div className="div-css ">
            {item?.image && item?.image?.src ? (
              <img
                src={item.image.src}
                alt="Product Image"
                widp={500}
                height={500}
              />
            ) : (
              <img
                src="/No Image.jpg"
                alt="Product Image"
                widp={500}
                height={500}
              />
            )}
          </div>
          <div className="div-css  ">
            <h1>{item.title}</h1>
            <p>Description: {item.body_html}</p>

            <p>Product Avaiablity: {item.status}</p>
            <p>Vendor: {item.vendor}</p>
            {item.variants.length > 1 ? <p>Colors Avaiable</p> : null}
           
            {item.variants && item.variants.length > 1
              ? item.variants.map((vart) => (
                  <span
                    key={vart.id}
                    className="color-circle-row"
                    onClick={() => handleText(vart.id)}
                  >
                    <ColorCircle
                      color={vart.option2}
                      borderColor={borderColor}
                      onClick={() => handleColorCircle(vart.id)}
                    />
                  </span>
                ))
              : item.variants.map((vart) => (
                  <span key={vart.id}>
                    {vart.option2 === null ? (
                      console.log("Null")
                    ) : (
                      <span>
                        {" "}
                       
                        <ColorCircle color={vart.option2} />{" "}
                      </span>
                    )}
                  </span>
                ))}
            {item.variants.length > 1
              ? item.variants.map((vart) => (
                  <>
                    {vart.id === textID && (
                      <span key={vart.id}>
                        <p>Price:{vart.price}</p>
                        <p>Price:{vart.option2}</p>
                        <p>Price:{vart.created_at.slice(0, 10)}</p>
                      </span>
                    )}{" "}
                  </>
                ))
              : item.variants.map((vart) => (
                  <span key={vart.id}>
                    <p>Price: {vart.price}</p>
                    <p>Manufacture Date: {vart.created_at.slice(0, 10)}</p>
                  </span>
                ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
