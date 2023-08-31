import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../features/cart/helpers/getCart";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allCartProducts } = useSelector((store) => store.cart);

  useEffect(() => {
    try {
      dispatch(getCart());
    } catch (error) {
      console.log(err);
    }
  }, []);
  return (
    <div className="common-flex js-around nav-container">
      <p className="text-primary fs-med" onClick={() => navigate("/")}>
        Home
      </p>

      <div>
        <input type="search" placeholder="Search" />
      </div>
      <div className="jst-sp-bet common-flex a-center gap-sm">
        <p>Shop</p>
        <p className="para" onClick={() => navigate("/cart")}>
          {" "}
          <AiOutlineShoppingCart />{" "}
          {allCartProducts ? (
            <span className="badge">{allCartProducts?.length}</span>
          ) : (
            ""
          )}
        </p>
        <p>
          <BiSolidUser />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
