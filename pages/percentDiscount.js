import { collection } from "@/models/collection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PercentDiscount = () => {
  const [percent, setPercent] = useState("");
  
  const [productData, setProductData] = useState("");

  const GetCollections = async () => {
    const response = await fetch("http://localhost:3000/api/getcollection");
    const data = await response.json();
    console.log("data", data.collections);
    setProductData(data.collection)
  };

  useEffect(() => {
    GetCollections();
  }, []);

  const handleOnClicked = (e) => {
    setPercent(e);
  };

  // const filterProducts = productData.filter(()=>)

  return (
    <div>
      <h1>Welcome to Percentage Discount</h1>

      <div>
        <input
          type="text"
          value={percent}
          onChange={(e) => handleOnClicked(e.target.value)}
        />
      </div>
      <div>
        <table className="table" style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Vendor</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <th>ABC</th>
              <th>ABC</th>
              <th>ABC</th>
              <th>ABC</th>
              <th>ABC</th>
              <th>ABC</th>
            </tr>
            <tr>
              <th></th>
              <th>DEF</th>
              <th>DEF</th>
              <th>DEF</th>
              <th>DEF</th>
              <th>DEF</th>
              <th>DEF</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PercentDiscount;
