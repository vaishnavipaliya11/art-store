import React, { useEffect } from "react";
import { getAuthUserStorage } from "../../util/setAuthUserStorage";
import Navbar from "../../components/navbar/Navbar";
import "../../styles.css";
import "./profile.css";
import userImg from "../../assets/user.svg";
import { useNavigate } from "react-router-dom";
import { profileOptions } from "../../constansts";
export const Profile = () => {
  const navigate = useNavigate();
  let userData;
  useEffect(() => {
    userData = getAuthUserStorage();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="common-col ">
        <div className="profile-container common-col gap-sm">
          <div>
            <h2 className="text-primary">User Details</h2>
            <div className="horizontal-line"></div>
          </div>
          <div className="common-flex gap-sm">
            <div className="common-col gap-sm">
              {profileOptions.map(({ text, path }) => {
                return (
                  <>
                    <ul onClick={() => navigate(path)}>{text}</ul>
                  </>
                );
              })}
            </div>
            <div className="common-col gap-sm a-center ">
              <img src={userImg} alt="user-img" className="user-img" />
              <p>Name : {getAuthUserStorage().name}</p>
              <p>Email : {getAuthUserStorage().email} abcd@</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
