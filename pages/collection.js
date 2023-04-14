import { useRouter } from "next/router";
import { useState } from "react";

const Collection = ({ filterProductData }) => {
  const router = useRouter();
  const [collectionName, setCollectionName] = useState("");

  const handleDiscount = () => {
    console.log("Discount /Collections");
    router.push("/discount_page");
  };

  const handleCollectionCreate = (event) => {
    console.log("handleCollectionCreate");
    console.log("Collection Name", collectionName);
    console.log("Collection Products",filterProductData)

  };
  console.log("collectionName", collectionName);
  
  const handleCollectionName = () => {
    console.log("handleCollectionName");
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
            onChange={(e) => { setCollectionName(e.target.value) }}
          />
          <p>Your Collection Name: {collectionName}</p>
        </div>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Vendor</th>
              <th>Created Date</th>
              <th>Collection Name</th>
            </tr>
          </thead>
          <tbody>
            {filterProductData &&
              filterProductData.length > 0 &&
              filterProductData.map((product, index) => (
                <tr key={index}>
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
                  <th>{collectionName}</th>
                </tr>
              ))}
          </tbody>
        </table>
        <button onClick={handleCollectionCreate}> Add to Collection</button>
        <br />
        <br /><button onClick={handleDiscount}> Add to Discount</button>
      </div>
    </div>
  );
};
export default Collection;

