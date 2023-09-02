import React from "react";
import AddressForm from "../../components/address/AddressForm";
import Navbar from "../../components/navbar/Navbar";
import "../../styles.css"

const Address = () => {
  return (
    <div>
      <Navbar />
      <div className="common-flex a-center j-center mr-sm-btm">
       
        <AddressForm />
      </div>
    </div>
  );
};

export default Address;
