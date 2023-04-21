import React, { useEffect } from "react";

const FlatDiscount = () => {
  const [flat, setFlat] = useState("");

    const GetCollections = async () => {
        const response = await fetch('http://localhost:3000/api/getcollection')
        const data = await response.json()
        console.log("data",data.collections)
    }

    useEffect(() => {
        GetCollections()
    }, [])
  
    const handleOnClicked = (e) => {
      setflat(e)
    };

    return (
        <div>
          <h1>Welcome to Flatage Discount</h1>
    
          <div>
            <input type="text" value={flat} onChange={(e) => handleOnClicked(e.target.value)} />
          </div>
              <div>
                  <table className="table" style={{border: "1px solid black"}}>
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
}

export default FlatDiscount;
