import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ColorCircle from "./colorCircle";

const Product = () => {
  const router = useRouter();
  const productID = router.query;
  const [getProducts, setGetProducts] = useState([]);
  const [textID, setTextID] = useState(productID.variant_id);
  const [borderColor, setBorderColor] = useState("black");

  console.log("VariantID", productID);
  console.log("VariantID", productID.variant_id);
  console.log("TextID", textID);

  const GetProducts = async () => {
    const response = await fetch("/api/shopify");
    const data = await response.json();
    setGetProducts(data);
  };

  useEffect(
    () => {
      GetProducts();
    },
    [productID.variant_id,textID]
  );

  const productData = getProducts.filter(
    (obj) => obj.id === parseInt(productID.id)
  );

  if (productData) {
    console.log("Match found:", productData);
  } else {
    console.log("No match found.");
  }

  const handleColorCircle = (id) => {
    setBorderColor("black");
  };
  useEffect(() => {
    setTextID(productID.variant_id);
  }
  ,[productID])

  const handleText = (id) => {
    setTextID(id);
  };

  return (
    <div className="container">
      {productData.map((item) => (
        <div className="div-css row " key={item.id}>
          <div className="div-css ">
            {/* {item.variants.length >= 1 &&
              item.images.map((img) => (
                <>
                  {img.variant_ids[0] === textID && (
                    <img
                      key={img.variant_ids}
                      src={img.src}
                      alt="Product Image"
                      width={500}
                      height={500}
                    />
                  )}
                </>
              ))}
            {item?.image && item?.image?.src != null ? null : (
              <img
                src="/No Image.jpg"
                alt="Product Image"
                widp={500}
                height={500}
              />
            )} */}
            {item.variants.length <= 1 ? (
              item.images.length >= 1 ? (
                item.images.map((img) => (
                  <img
                    key={img.variant_ids}
                    src={img.src}
                    alt="Product Image"
                    width={500}
                    height={500}
                  />
                ))
              ) : (
                <img
                  src="/No Image.jpg"
                  alt="Product Image"
                  widp={500}
                  height={500}
                />
              )
            ) : (
                item.images.map((img) => {
                  return (
                    img.variant_ids[0] === textID && (
                      <img
                            key={img.variant_ids}
                            src={img.src}
                            alt="Product Image"
                            widp={500}
                            height={500}
                          />
                 )
               )
             })
            )}
          </div>
          <div className="div-css">
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
                    {vart.option2 === null ? null : (
                      <span>
                        {" "}
                        <ColorCircle color={vart.option2} />{" "}
                      </span>
                    )}
                  </span>
                ))}
            {item.variants.length > 1
              ? item.variants.map((vart) => (
                  <span key={vart.id}>
                    {vart.id === textID && (
                      <span key={vart.id}>
                        <p>Price: {vart.price}Rs</p>
                        <p>Color: {vart.option2}</p>

                        <p>Manufacture Date: {vart.created_at.slice(0, 10)}</p>
                      </span>
                    )}{" "}
                  </span>
                ))
              : item.variants.map((vart) => (
                  <span key={vart.id}>
                    <p>Price: {vart.price}Rs</p>
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
