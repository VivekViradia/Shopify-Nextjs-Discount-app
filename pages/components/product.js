import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      {/* <h1>Product ID: {id}</h1> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-8">col-sm-8</div>
          <div className="col-sm-4">col-sm-4</div>
        </div>
      </div>
    </>
  );
};

export default Product;
