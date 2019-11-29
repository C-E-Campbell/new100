import React from "react";
import { Link } from "react-router-dom";
import "../DashboardHeader/DashboardHeader.style.scss";
export default function HomeOnlyHeader() {
  return (
    <div className="header-container">
      <div className="inside-container">
        <div>
          <Link to="/comments">Spill Your Guts</Link>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </div>
  );
}
