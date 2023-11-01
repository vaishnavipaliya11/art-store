import React from "react";
import { profileOptions } from "../../constansts";
import Navbar from "../../components/navbar/Navbar";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../../features/auth/authSlice";

export const Setting = () => {
  const navigate = useNavigate();
  const {isLoggedIn}= useSelector(store => store.auth)
  const dispatch= useDispatch()
  return (
    <div>
      <Navbar />
      <div className="common-col ">
        <div className="profile-container common-col gap-sm">
          <div>
            <h2 className="text-primary">User Setting</h2>
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
            <div className="common-col  ">
              <p>Account Setting</p>
              <button className="btn-secondary" onClick={() => {
                dispatch(setLoggedUser(isLoggedIn))
                navigate("/products")
              }}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
