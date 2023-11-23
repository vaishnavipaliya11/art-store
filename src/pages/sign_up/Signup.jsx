import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { signupForm } from "../../constansts";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import toast from "react-hot-toast";
const Signup = () => {
  const navigate = useNavigate();
  const [authDetails, setAuthDetails] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name, "name");
    setAuthDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  console.log(authDetails,"authDetails");

  const onSubmit = async (e) => {
    console.log(e,"event");
    e.preventDefault()
    try {
      const authResponse = await createUserWithEmailAndPassword(
        auth,
        authDetails.email,
        authDetails.password
      );
      const user = authResponse.user;
      console.log(user, "authResponse");
      if(user){
        navigate("/login");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage)
      console.log(errorCode, errorMessage,"errorMessage");
      // ..
    }
  };
  return (
    <div>
      <Navbar />
      <div className="mr-sm-btm  common-col a-center j-center">
        <div className="common-col  gap-xs box-shd padding-sm img-border width-min ">
          {signupForm.map(({ label, type,name }) => {
            return (
              <label className="common-col gap-xxs">
                {label}
                <input className="myInput" type={type} name={name} onChange={(e) => onChangeHandler(e)}/>
              </label>
            );
          })}

          <label className="common-flex gap-xxs">
            <input className="myInput" type="checkbox" /> I agree to all Terms &
            Conditions
          </label>
          <div className="common-col gap-xs">
            <button className="btn-primary" onClick={onSubmit}>Create new account</button>
            <button
              className="read-more-btn"
              onClick={() => navigate("/login")}
            >
              Already have an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
