import { useRouter } from "next/router";
import React from "react";

const Product = () => {
    const router = useRouter();
    const { id } = router.query;

    return <>
        <h1>Product ID: { id}</h1>
    </>
}

export default Product;