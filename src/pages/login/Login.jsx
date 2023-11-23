import React, { useState } from "react";
import "../../styles.css";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUserStorage } from "../../util/setAuthUserStorage";
import {
  setAuthToken,
  setFirebaseEmail,
  setLoggedUser,
} from "../../features/auth/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((store) => store.auth);
  console.log(isLoggedIn, "isLoggedIn");
  const [authDetails, setAuthDetails] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name, "name");
    setAuthDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  console.log(authDetails, "authDetails");
  const onLogin = async () => {
    try {
      const authResponse = await signInWithEmailAndPassword(
        auth,
        authDetails.email,
        authDetails.password
      );
      const user = authResponse.user;
      console.log(user, "authResponse");

      if (user) {
        setAuthUserStorage(user.email);
        dispatch(setFirebaseEmail(user.email));
        dispatch(setAuthToken(user.accessToken));
        navigate("/");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage);
      console.log(errorCode, errorMessage);
    }
  };

  const onFinishFailed = () => {
    console.log("Failed:");
  };
  return (
    <div>
      <Navbar />

      <div className="login-container common-col a-center j-center">
        <div className="common-col  gap-xs box-shd padding-sm img-border width-min">
          <label className="common-col gap-xxs">
            Email
            <input
              className="myInput"
              name="email"
              onChange={(e) => onChangeHandler(e)}
            />
          </label>
          <label className="common-col gap-xxs">
            Password
            <input
              className="myInput"
              name="password"
              onChange={(e) => onChangeHandler(e)}
            />
          </label>
          <div className="common-col gap-xs">
            <button
              className="btn-secondary"
              onClick={() => {
                onLogin();
                // dispatch(setLoggedUser());
                // setAuthUserStorage();
                // navigate("/products");
              }}
            >
              Login
            </button>
            <button
              className="btn-primary"
              onClick={() => {
                // const
                dispatch(setLoggedUser());
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
