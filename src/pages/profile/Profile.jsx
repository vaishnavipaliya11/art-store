import React, { useEffect } from "react";
import { getAuthUserStorage } from "../../util/setAuthUserStorage";
import Navbar from "../../components/navbar/Navbar";
import "../../styles.css";
import "./profile.css";
export const Profile = () => {
  let userData;
  useEffect(() => {
    userData = getAuthUserStorage();
  }, []);

  console.log(getAuthUserStorage(), "userData");
  return (
    <div>
      <Navbar />
      <div className="common-col a-center j-center profile-height">
        <div>
          <p>User Details</p>
        </div>
        <div className="common-flex">
          <div>
            <p>Profile</p>
            <p>Orders</p>
            <p>Address</p>
            <p>Settings</p>
          </div>
          <div>
            <p>Name : {getAuthUserStorage().name}</p>
            <p>Email : {getAuthUserStorage().email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
