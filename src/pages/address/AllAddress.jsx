import React, { useEffect } from "react";
import { profileOptions } from "../../constansts";
import Navbar from "../../components/navbar/Navbar";
import userImg from "../../assets/user.svg";
import { getAuthUserStorage } from "../../util/setAuthUserStorage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../features/address/helpers/getAddress";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import "./address.css"
export const AllAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allAddress } = useSelector((store) => store.address);
  useEffect(() => {
    dispatch(getAddress());
  }, []);
  return (
    <div>
      <Navbar />
      <div className="common-col">
        <div className="profile-container common-col gap-sm">
          <div>
            <h2 className="text-primary">All Address</h2>
            <div className="horizontal-line"></div>
          </div>
          <div className="common-flex gap-sm">
            <div className="common-col gap-sm">
              {profileOptions?.map(({ text, path }) => {
                return (
                  <>
                    <ul onClick={() => navigate(path)}>{text}</ul>
                  </>
                );
              })}
            </div>
            <div className="four-layout-grid  a-start gap-xxs">
              {allAddress?.map(
                ({
                  fullName,
                  street,
                  city,
                  postalCode,
                  mobileNumber,
                  country,
                  state,
                }) => {
                  return (
                    <div className=" address-block img-border">
                      <div>
                        <p className="mar-top">{fullName}</p>
                        <p className="mar-zer">{street}</p>
                        <p className="mar-zer">
                          {city} <span>{postalCode}</span>
                        </p>
                        <p className="mar-zer">{state}</p>
                        <p className="mar-zer">{country}</p>
                        <p>{mobileNumber}</p>
                      </div>
                      <div className="common-flex a-start gap-xs">
                        <button
                          className="btn-primary"
                          onClick={() => {
                            navigate("/address");
                            dispatch(setSelectedAddress(id));
                          }}
                        >
                          <AiFillEdit />
                        </button>

                        <button
                          className="btn-secondary"
                          onClick={() => {
                            //   dispatch(deleteAddress(id));
                            //   dispatch(getAddress());
                          }}
                        >
                          <AiTwotoneDelete />
                        </button>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
