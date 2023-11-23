import React from "react";
import "../../styles.css"
import { Link, useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate= useNavigate()
  return (
    <div className="common-col a-center">
      {" "}
        <h1>404 page not found</h1>
        <button className="btn-primary" onClick={()=> navigate("/")}>
          Go back home
        </button>
    </div>
  );
};
