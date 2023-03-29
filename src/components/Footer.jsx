import React from "react";
import logoFooter from "../assets/img/LOGO-footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-footer">
        <img src={logoFooter} alt="Logo Footer" />
        <h3 className="footer-title">
          <FontAwesomeIcon icon={faCopyright} className="icon-footer" />
          2020 Kasa. All rights reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
