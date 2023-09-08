import React, { useEffect } from "react";
import { addAddressInput } from "../../constansts";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddressInput,
  setEditAddress,
} from "../../features/address/addressSlice";
import { postAddress } from "../../features/address/helpers/postAddress";
import "../../styles.css";
import { getSingleAddress } from "../../features/address/helpers/getSingleAddress";
import { updateAddress } from "../../features/address/helpers/updateAddress";
import { getAddress } from "../../features/address/helpers/getAddress";
import { useNavigate } from "react-router-dom";
const AddressForm = () => {
  const dispatch = useDispatch();
  const { addressDetailsInput, selectedAddressId, singleAddress, isEditMode } =
    useSelector((store) => store.address);
  const navigate= useNavigate()
  
  useEffect(() => {
    dispatch(getSingleAddress(selectedAddressId));
  }, []);

  useEffect(() => {
    dispatch(setEditAddress(singleAddress));
  }, [singleAddress]);

  const handleAddressClick = () => {
    if (isEditMode) {
      console.log("addressDetailsInput", addressDetailsInput);

      dispatch(
        updateAddress({ id: singleAddress.id, payload: addressDetailsInput })
      );
      dispatch(getAddress());
    } else {
      dispatch(postAddress(addressDetailsInput));
      dispatch(getAddress());
    }
  };

  return (
    <div className="common-col gap-xsm address-form-width">
      <h3 className="fs-xbg">Enter your delivery address </h3>
      {addAddressInput?.map(({ title, type, name, placeholder }) => {
        return (
          <label className="common-col">
            {title}
            <input
              required={true}
              placeholder={placeholder}
              type={type}
              className="address-input"
              name={name}
              value={addressDetailsInput[name]}
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
          handleAddressClick();
          navigate("/review")
        }}
      >
        {isEditMode ? "Edit Address" : "Save Address"}
      </button>
    </div>
  );
};

export default AddressForm;
