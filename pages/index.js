import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Collection from "./collection_page";

function App() {
  const router = useRouter();
  const [getProducts, setGetProducts] = useState([]);
  const [checkBox, setCheckBox] = useState([]);
  const [checked, setChecked] = useState(false);
  const [blankArray, setBlankArray] = useState([]);

  const getProduct = async () => {
    const response = await fetch("http://localhost:3030/getproducts");
    const data = await response.json();
    return setGetProducts(data.products);
  };

  useEffect(() => {
    getProduct();
  }, []);

  

//   useEffect(() => {
//     let abc = getProducts.filter((data) => {
//     data.id === 
//   })
// },[])

  const handleDiscountButton = () => {
    console.log("Discount Button Clicked");
    router.push("/discount_page");
  };

  console.log("getProducts", getProducts);

  const handleChange = (id) => {
    console.log("CHECKDED", id);

    if (checkBox.includes(id)) {
      const index = checkBox.indexOf(id);
      if (index > -1) {
        checkBox.splice(index, 1);
      }
    } else {
      setCheckBox([...checkBox, id]);
    }
  };

  // const handleCollection = () => {
  //   console.log("CHECKDED");
  //   router.push({
  //     pathname: "/collection_page",
  //     query: checkBox,
  //   });
  // };

  console.log("CheckBox", checkBox);

  return (
    <div className="App">
      {
        checked ? <Collection checkBox={checkBox}/> : 

      <><h1>Product List</h1>
      <div style={{ height: "500px", overflow: "auto" }}>
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
            {getProducts &&
              getProducts.length > 0 &&
              getProducts.map((products, index) => (
                <tr key={index}>
                  <th>
                    <input
                      type="checkbox"
                      onChange={() => handleChange(products.id)}
                    />
                  </th>
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
      </div></>}
      <br />
      <br />
      {checked ?  <div style={{ textAlign: "center" }}>
        <button onClick={()=>{setChecked(false)}}>Back to Products</button>
      </div>:<div style={{ textAlign: "center" }}>
        <button onClick={()=>{setChecked(true)}}>Add to Collection</button>
      </div>
      }
      
    </div>
  );
}

export default App;
