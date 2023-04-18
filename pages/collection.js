import { useRouter } from "next/router";
import { useState } from "react";

const Collection = ({ filterProductData }) => {
  const router = useRouter();
  const [collectionName, setCollectionName] = useState("");
  const [productName, setProductName] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productVendor, setProductVendor] = useState();

  const handleDiscount = () => {
    console.log("Discount /Collections");
    router.push("/discount");
  };

  const handleCollectionCreate = () => {
    console.log("Collection Name", collectionName);
    console.log("Collection Product",filterProductData)

  };
  console.log("collectionName", collectionName);
  
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
                  )
                  }
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
        <button onClick={handleCollectionCreate}> Add to Collection</button>
        <br />
        <br /><button onClick={handleDiscount}> Add to Discount</button>
      </div>
    </div>
  );
};
export default Collection;

