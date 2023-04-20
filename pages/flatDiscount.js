import React, { useEffect } from "react";

const FlatDiscount = () => {

    const GetCollections = async () => {
        const response = await fetch('http://localhost:3000/api/getcollection')
        const data = await response.json()
        console.log("data",data.collections)
    }

    useEffect(() => {
        GetCollections()
    },[])

    return (
        <div>
            <h1>Welcome to Flat Discount</h1>
        </div>
    )
}

export default FlatDiscount;
