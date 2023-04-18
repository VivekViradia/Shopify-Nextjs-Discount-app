import React, { useState } from "react";
import styles from "@/styles/home.module.css";

const Discount = () => {
  // const handleAddDiscount = () => {
  // console.log("Discount Added")
  // }
  const [discountCode, setDiscountCode] = useState();
  const [discountPercentage, setDiscountPercentage] = useState();

  const handleAddDiscount = () => {
    console.log("handleAddDiscount");
  };

  const handleDiscountCode = (e) => {
  };

  console.log("discountCode", discountCode);

  const handleDiscountPercentage = (e) => {
    console.log("handleDiscountPercentage");
  };

  return (
    <React.Fragment>
      <div>
        <form>
          <h3>Discount Page</h3>
          <label>
            Generate Discount Code
            <br />
            <input
              type="text"
              name=" discountCode"
              onChange={(e) => {
                setDiscountCode(e.target.value);
              }}
            />
          </label>
          <br />
          <br />
          <label>
            Discount Percentage
            <br />
            <input
              type="number"
              name="Discount_Percentage"
              onChange={(e) => {
                setDiscountPercentage(e.target.value);
              }}
            />
          </label>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Original Price</th>
                <th>Discounted Price</th>
                <th>Discount Percentage</th>
                <th>Discount Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>s</th>
                <th>s</th>
                <th>s</th>
                <th>s</th>
                <th>s</th>
              </tr>
              <tr>
                <th>g</th>
                <th>g</th>
                <th>g</th>
                <th>g</th>
                <th>g</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <input type="submit" />
        </form>
        <br />
      </div>
    </React.Fragment>
  );
};

export default Discount;
