import React from "react";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AllRoutes = () => {
  const isAuth = true;
  return (
    <div>
      AllRoutes
      {/* {isAuth ? <PrivateRoutes /> : <PublicRoutes />} */}
      <PrivateRoutes/>
      <PublicRoutes/>
    </div>
  );
};

export default AllRoutes;
