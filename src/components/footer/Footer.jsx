import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import "../../styles.css";

const Footer = () => {
  return (
    <div className="common-flex a-center jst-sp-bet  gap-sm">
      <div className="common-flex a-center jst-sp-bet  gap-sm">
        <AiOutlineGithub className="fs-bg social-icon text-primary" />
        <AiFillLinkedin className="fs-bg social-icon text-primary" />
        <AiOutlineTwitter className="fs-bg social-icon text-primary" />
      </div>
      {/* <p>© 2023 My store</p> */}
    </div>
  );
};

export default Footer;
