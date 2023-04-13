import React from "react";
import styles from "@/styles/home.module.css";

const Discount = () => {
  // const handleAddDiscount = () => {
  // console.log("Discount Added")
  // }

  const handleAddDiscount = () => {
    console.log("handleAddDiscount");
  };

  const handleDiscountCode = () => {
    console.log("HandleDiscountCode");
  };
  const handleDiscountPercentage = () => {
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
              name=" Discount Code"
              value=""
              onChange={handleDiscountCode}
            />
          </label>
          <br />
          <br />
          <label>
            Discount Percentage
            <br />
            <input
              type="text"
              name="Discount Percentage"
              value=""
              onChange={handleDiscountPercentage}
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
      </div>
    </React.Fragment>
  );
};

export default Discount;
