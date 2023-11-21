import React, { useEffect } from "react";
import { AiFillHeart, AiOutlineShoppingCart , AiOutlineHeart} from "react-icons/ai";
import { BsBasket } from "react-icons/bs";

import { BiSolidUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../features/cart/helpers/getCart";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allCartProducts } = useSelector((store) => store.cart);
  const {allwishlistProducts}= useSelector(store => store.wishlist)

  useEffect(() => {
    try {
      // dispatch(getCart());
    } catch (error) {
      console.log(err);
    }
  }, []);
  return (
    <div className="common-flex js-around nav-container">
      <p className="title text-primary fs-med" onClick={() => navigate("/")}>
        Arto-G
      </p>

      <div>
      </div>
      <div className="jst-sp-bet common-flex a-center gap-sm">
        
        <p className="para pointer" onClick={() => navigate("/wishlist")}>
          {" "}
          <AiOutlineHeart className="icons"/>{" "}
          {allCartProducts ? (
            <span className="badge">{allwishlistProducts?.length}</span>
          ) : (
            ""
          )}
        </p>
        <p className="para pointer" onClick={() => navigate("/cart")}>
          {" "}
          <BsBasket />{" "}
          {allCartProducts ? (
            <span className="badge">{allCartProducts?.length}</span>
          ) : (
            ""
          )}
        </p>
        <p className="pointer para">
          <BiSolidUser onClick={() => navigate("/profile")}/>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
