import React from "react";
import { Link } from "react-router-dom";
import "../HomeOnlyHeader/HomeOnly.style.scss";
export default function HomeOnlyHeader() {
  return (
    <div className="header-container">
      <div className="inside-container">
        <Link to="/">
          <div className="logo-box"></div>
        </Link>
        <div>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </div>
  );
}
