import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DiscountList from "./discountList";
import Popup from "./popup";

const Collection = ({ filterProductData, products }) => {
  const router = useRouter();
  const [collectionName, setCollectionName] = useState("");
  const [productData, setProductData] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleDiscount = () => {
    // router.push("/discountList");
    router.push({
      pathname: "/discountList",
    });
  };
  useEffect(() => {
    setProductData(filterProductData);
  }, []);
  console.log("ProductData", productData);

  const handleCollectionCreate = () => {
    console.log("Collection Name", collectionName);
    console.log("Collection ProductID", products);
    setShowPopup(!showPopup);
    let details = { collectionName, products };
    console.log("details", details);
    fetch("http://localhost:3000/api/addcollection", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    }).then((response) => {
      console.log("Response", response);
      response.json().then((result) => {
        console.log("Result", result);
      });
    });
  };

  return (
    <div>
      <h4>Collection page</h4>
      <div>
        <div>
          <p>Create new Collection</p>
          <input
            type="text"
            name="Collection Name"
            value={collectionName}
            onChange={(e) => {
              setCollectionName(e.target.value);
            }}
          />
          <br />
          <br />
          <h4>Your Collection Name: {collectionName}</h4>
        </div>
        <table className="table" style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Vendor</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {filterProductData &&
              filterProductData.length > 0 &&
              filterProductData.map((product, index) => (
                <tr key={index}>
                  {product?.image && product?.image?.src ? (
                    <th>
                      <img
                        src={product.image.src}
                        alt="Product Image"
                        width={60}
                        height={60}
                      />
                    </th>
                  ) : (
                    <th>
                      <img
                        src="/No Image.jpg"
                        alt="Product Image"
                        width={60}
                        height={60}
                      />
                    </th>
                  )}
                  <th>{product.title}</th>

                  {!product.body_html ? (
                    <th>Null</th>
                  ) : (
                    <th>{product.body_html}</th>
                  )}

                  {product.variants &&
                    product.variants.length > 0 &&
                    product?.variants?.map((vart, index) => (
                      <th key={index}>{vart?.price}</th>
                    ))}

                  <th>{product.vendor}</th>
                  <th>{product.created_at.slice(0, 10)}</th>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          <button type="button" onClick={handleCollectionCreate}>
            Add to Collection
          </button>
          {showPopup && <Popup />}
        </div>

        <br />
        <br />
        <button type="button" onClick={handleDiscount}>
          {" "}
          Add to Discount
        </button>
      </div>
    </div>
  );
};
export default Collection;
