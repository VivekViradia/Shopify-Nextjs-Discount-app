import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";
import Collection from "./collection";
import Head from "next/head";


function App() {
  const router = useRouter();
  const [getProducts, setGetProducts] = useState([]);
  const [checkBox, setCheckBox] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/shopify');
      const data = await res.json();
      setGetProducts(data);
    }

    fetchData();
  }, []);

  console.log("getProducts", getProducts);
  const filterProductData = getProducts.filter((item) =>
    checkBox.find((abc) => item.id == abc)
  );

  const handleDiscountButton = () => {
    router.push("/discountList");
  };
  const handleChange = (id) => {
    if (checkBox.includes(id)) {
      const index = checkBox.indexOf(id);
      if (index > -1) {
        checkBox.splice(index, 1);
      }
    } else {
      setCheckBox([...checkBox, id]);
    }
  };
const checkboxStyle = {
    width: '15px',
    height: '15px',
  };

  return (
    <div className="App">
      {checked ? (
        <Collection filterProductData={filterProductData} products={checkBox} />
      ) : (
          <>
            <Head>
              <link rel="icon" type="image/png" href="/icon2.png" />
              
            </Head>
          <h1>Product List</h1>
          <div style={{ height: "500px", overflow: "auto" }}>
          <table className="table" style={{border: "1px solid black"}}>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Vendor</th>
                  <th>Created Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {getProducts &&
                  getProducts.length > 0 &&
                  getProducts.map((products, index) => (
                    <tr key={index}>
                       <th>
                        <input
                          style={checkboxStyle}
                          type="checkbox"
                          onChange={() => handleChange(products.id)}
                        />
                      </th>
                      {products?.image && products?.image?.src ? (
                        <th>
                          <img
                            src={products.image.src}
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
                      <th>{products.created_at.slice(0, 10)}</th>
                      <th>{products.status}</th>
                      <th>
                        <button onClick={handleDiscountButton}>
                          Add Discount
                        </button>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <br />
      <br />
      {checked ? (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              setChecked(false);
            }}
          >
            Back to Products
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              setChecked(true);
            }}
          >
            Add to Collection
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
