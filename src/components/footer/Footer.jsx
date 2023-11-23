import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import "../../styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="common-flex a-center jst-sp-bet  gap-sm">
      <div className="common-flex a-center jst-sp-bet  gap-sm">
        <Link to="https://github.com/vaishnavipaliya11">
          <AiOutlineGithub className="fs-bg social-icon text-primary" />
        </Link>
        <Link to="https://www.linkedin.com/in/vaishnavi1128/">
          <AiFillLinkedin className="fs-bg social-icon text-primary" />
        </Link>
      </div>
      {/* <p>© 2023 My store</p> */}
    </div>
  );
};

export default Footer;
