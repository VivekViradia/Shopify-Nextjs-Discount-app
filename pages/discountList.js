import { useRouter } from "next/router";
import React, { useState } from "react";
import Modal from "react-modal";

const DiscountList = ({filterProductData}) => {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    };
console.log("filterProductData",filterProductData);
    const handlePercentDiscount = () => {
        route.push("/percentDiscount");
        setIsOpen(false);
    };

  const handleFlatDiscount = () => {
    route.push("/flatDiscount");
    setIsOpen(false);
  };

  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles}>
        <h1>Select Discount Type </h1>
        <button onClick={handlePercentDiscount}>Percentage Discount</button>
        <br />
        <br />
        <button onClick={handleFlatDiscount}> Flat Amount OFF</button>         
        <br />
        <br />
      </Modal>
    </div>
  );
};
export default DiscountList;
