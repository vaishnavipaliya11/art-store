import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { signupForm } from "../../constansts";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="mr-sm-btm  common-col a-center j-center">
        <form className="common-col  gap-xs box-shd padding-sm img-border width-min ">
          {signupForm.map(({ label, type }) => {
            return (
              <label className="common-col gap-xxs">
                {label}
                <input className="myInput" type={type} />
              </label>
            );
          })}

          <label className="common-flex gap-xxs">
            <input className="myInput" type="checkbox" /> I agree to all Terms &
            Conditions
          </label>
          <div className="common-col gap-xs">
            <button className="btn-primary">Create new account</button>
            <button
              className="read-more-btn"
              onClick={() => navigate("/login")}
            >
              Already have an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
