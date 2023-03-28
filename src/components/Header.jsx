import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/LOGO.png";

const Header = () => {
  return (
    <div className="header_container">
      <nav>
        <ul className="nav_header">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="A propos">A propos</NavLink>
          </li>
        </ul>
      </nav>
      <div className="header_logo">
        <img src={logo} alt="Logo Kasa" className="logo" />
      </div>
    </div>
  );
};

export default Header;
