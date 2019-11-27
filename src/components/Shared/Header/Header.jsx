import React from "react";

import { Link } from "react-router-dom";
import "./Header.style.scss";

const Header = props => {
  return (
    <div className="header" id="header">
      <div className="header-container">
        <Link to="/">
          <div className="header-logo"></div>
        </Link>
        <ul className="header-nav">
          <Link to="/login" className="header-li">
            Login
          </Link>
          <Link to="/register" className="header-li">
            Register
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
