import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Collection = ({ searchParams }) => {
  const router = useRouter();
  const routerData = router.query;
  const data = Object.values(routerData)
  const [productData,setProductData] = useState()
  const [productDatas,setProductDatas] = useState()

  console.log("Type of Data",typeof data,"Row Data", data);
  const handleDiscount = () => {
    console.log("Discount /Collections");
    router.push("/discount_page");
  };

  const getProduct = async() => {
    const response = await fetch("http://localhost:3030/getproducts");
    const responseData = await response.json()
    // const filteredProductData = responseData.products.filter(item => responseData.includes(item.id))
    setProductData(responseData.products)
    // setProductDatas(filteredProductData)
}

  useEffect(() => {
    getProduct()
  },[])


  // const filterProductData = !productData && productData.filter(item => data.includes(item.id))
  // console.log("filterProductData",filterProductData)

  console.log("Collection Page getProduct",productData)
  return (
    <div>
      <div>
        <h4>Collection page</h4>
      </div>
      <div >
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
            <tr>
              <th>aa</th>
              <th>aa</th>
              <th>aa</th>
              <th>aa</th>
              <th>aa</th>
              </tr>
            <tr>
              <th>bb</th>
              <th>bb</th>
              <th>bb</th>
              <th>bb</th>
              <th>bb</th>
              </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>Create new Collection</p>
        <input type="string" />
      </div>
      <div>
        <button onClick={handleDiscount}>Add Discount</button>
      </div>
    </div>
  );
};
export default Collection;
