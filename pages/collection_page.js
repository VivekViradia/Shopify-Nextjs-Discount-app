import { useState } from "react";

const Collection = ({ filterProductData }) => {
  console.log("filterProductData", filterProductData);
  const [productData, setProductData] = useState();
  const [productDatas, setProductDatas] = useState();

  const handleDiscount = () => {
    console.log("Discount /Collections");
    router.push("/discount_page");
  };

  return (
    <div>
      <h4>Collection page</h4>

      <div>
        <table className="table">
          <thead>
            <tr>
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
                  <th>{product.created_at}</th>
                </tr>
              ))}
          </tbody>
        </table>
        <p>Create new Collection</p>
        <input type="string" />
        <button> Add to Collection</button>
      </div>
    </div>
  );
};
export default Collection;
