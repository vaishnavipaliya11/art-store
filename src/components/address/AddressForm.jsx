import React from "react";
import { addAddressInput } from "../../constansts";
import { useDispatch, useSelector } from "react-redux";
import { setAddressInput } from "../../features/address/addressSlice";
import { postAddress } from "../../features/address/helpers/postAddress";
import "../../styles.css";
const AddressForm = () => {
  const dispatch = useDispatch();
  const { addressDetailsInput } = useSelector((store) => store.address);
  console.log(addressDetailsInput, "addressDetailsInput");
  return (
    <div className="common-col gap-xsm address-form-width" >
      <h3 className="fs-xbg">Enter your delivery address </h3>
      {addAddressInput?.map(({ title, type, name, placeholder }) => {
        return (
          <label className="common-col">
            {title}
            <input
              placeholder={placeholder}
              type={type}
              className="address-input"
              name={name}
              onChange={(e) => {
                console.log(
                  e.target.name,
                  "e.target.name",
                  e.target.value,
                  "e.target.value"
                );
                dispatch(
                  setAddressInput({
                    name: e.target.name,
                    value: e.target.value,
                  })
                );
              }}
            />
          </label>
        );
      })}
      <button
        className="btn-primary"
        onClick={() => {
          dispatch(postAddress(addressDetailsInput));
        }}
      >
        Add Address
      </button>
    </div>
  );
};

export default AddressForm;
