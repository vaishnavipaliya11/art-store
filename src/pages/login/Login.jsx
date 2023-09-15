import React from "react";
import "../../styles.css";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUserStorage } from "../../util/setAuthUserStorage";
import { setLoggedUser } from "../../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((store) => store.auth);
  console.log(isLoggedIn, "isLoggedIn");
  return (
    <div>
      <Navbar />

      <div className="login-container common-col a-center j-center">
        <div className="common-col  gap-xs box-shd padding-sm img-border width-min">
          <label className="common-col gap-xxs">
            Email
            <input className="myInput" />
          </label>
          <label className="common-col gap-xxs">
            Password
            <input className="myInput" />
          </label>
          <div className="common-col gap-xs">
            <button
              className="btn-secondary"
              onClick={() => {
                dispatch(setLoggedUser(!isLoggedIn));
                setAuthUserStorage();
                navigate("/products");
              }}
            >
              Login
            </button>
            <button
              className="btn-primary"
              onClick={() => {
                dispatch(setLoggedUser(!isLoggedIn));
                setAuthUserStorage();
                navigate("/products");
              }}
            >
              {" "}
              Dummy User
            </button>
          </div>
          <button
            className="read-more-btn"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Create a new account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
