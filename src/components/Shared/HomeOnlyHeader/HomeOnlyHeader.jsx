import React from "react";
import { Link } from "react-router-dom";
import "./HomeOnly.style.scss";
export default function HomeOnlyHeader() {
  return (
    <div className="header-container">
      <div className="inside-container">
        <Link to="/">
          <div className="logo-box"></div>
        </Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
