import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../features/address/helpers/getAddress";
import Navbar from "../../components/navbar/Navbar";
import "../../styles.css";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { setSelectedAddress } from "../../features/address/addressSlice";
import { getSingleAddress } from "../../features/address/helpers/getSingleAddress";

const Review = () => {
  const { allAddress } = useSelector((store) => store.address);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(allAddress, "allAddress");

  useEffect(() => {
    dispatch(getAddress());
  }, []);

  return (
    <div>
      <Navbar />
      <div className="common-flex a-center j-center mr-sm-btm">
        <div className="common-col  js-evenly mr-sm-btm gap-sm">
          <h3 className="fs-xbg">Review the details of order</h3>
          <div>
            {allAddress.map(
              ({
                city,
                country,
                mobileNumber,
                postalCode,
                street,
                state,
                fullName,
                id,
              }) => {
                return (
                  <div className="common-flex a-start gap-bg">
                    <div>
                      <p>{fullName}</p>
                      <p>{street}</p>
                      <p>
                        {city} <span>{postalCode}</span>
                      </p>
                      <p>{state}</p>
                      <p>{country}</p>
                      <p>{mobileNumber}</p>
                    </div>
                    <button
                      className="btn-primary"
                      onClick={() => {
                        navigate("/address");
                        dispatch(setSelectedAddress(id));
                      }}
                    >
                      <AiFillEdit />
                    </button>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
