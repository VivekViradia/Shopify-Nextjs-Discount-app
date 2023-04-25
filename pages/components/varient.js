import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

function App() {
  const [getProducts, setGetProducts] = useState([]);
  const [checkBox, setCheckBox] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/shopify");
      const data = await res.json();
      setGetProducts(data);
    }

    fetchData();
  }, []);

  console.log("getProducts", getProducts);

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

  const handleOnClicked = (vart) => {
    console.log("handleOnClicked", vart);
  };

  const checkboxStyle = {
    width: "15px",
    height: "15px",
  };

  return (
    <div className="App">
      <>
        <Head>
          <link rel="icon" type="image/png" href="/icon2.png" />
        </Head>
        <h1>Product List</h1>
        <div style={{ height: "500px", overflow: "auto" }}>
          <table className="table" style={{ border: "1px solid black" }}>
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

                    {products.variants && products.variants.length == 1 ? (
                      products?.variants?.map((vart, index) => (
                        <th key={index}>{vart?.price}</th>
                      ))
                    ) : (
                      <button onClick={(vart) => handleOnClicked(vart)}>
                        Load More variants
                      </button>
                    )}

                    <th>{products.vendor}</th>
                    <th>{products.created_at.slice(0, 10)}</th>
                    <th>{products.status}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
}

export default App;
