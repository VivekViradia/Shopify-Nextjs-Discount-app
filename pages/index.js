import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";
import Link from "next/link";

function App() {
  const router = useRouter();
  const [getProducts, setGetProducts] = useState(null);
  const [checkBox, setCheckBox] = useState(null);
  const [checked, setChecked] = useState(false);

  const getProduct = () => {
    return fetch("http://localhost:3030/getproducts")
      .then((response) => response.json())
      .then((data) => setGetProducts(data.products));
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleDiscountButton = () => {
    console.log("Discount Button Clicked");
    router.push("/discount_page");
  };

  console.log("getProducts",getProducts);

  const handleChange = (id) => {
    console.log("CHECKDED", id);
    setCheckBox(id)
  };

  const handleCollection = () => {
    console.log("CHECKDED");
    router.push({
      pathname: "/collection_page",
      query: checkBox
    });
  };

  console.log("CheckBox",checkBox)

  return (
    <div className="App">
      <h1>Product List</h1>
      <div style={{height: "500px", overflow:"auto"}}>
        <table className="table">
          <thead>
            <tr>
              <th ></th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Vendor</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {getProducts &&
              getProducts.length > 0 &&
              getProducts.map((products, index) => (
                <tr key={index}>
                  {!products.images.src ? (
                    <th>
                      <input
                        type="checkbox"
                        onChange={() => handleChange(products.id)}
                      />
                    </th>
                  ) : (
                    <th>Image not Found</th>
                  )}

                  <th>{products.title}</th>
                  {!products.body_html ? (
                    <th>Null</th>
                  ) : (
                    <th>{products.body_html}</th>
                  )}

                  {products.variants &&
                    products.variants.length > 0 &&
                    products?.variants?.map((vart, index) => (
                      <th key={index}>{vart?.price}</th>
                    ))}

                  <th>{products.vendor}</th>
                  <th>{products.created_at}</th>
                  <th>
                    <button onClick={handleDiscountButton}>Add Discount</button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div><br/><br/>
      <div style={{textAlign:"center"}}>
        <button onClick={handleCollection}>Add to Collection</button>
      </div>
    </div>
  );
}

export default App;
