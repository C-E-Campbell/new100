import React from "react";
import { Link } from "react-router-dom";
import "../DashboardHeader/DashboardHeader.style.scss";
export default function HomeOnlyHeader(props) {
  return (
    <div className="header-container">
      <div className="inside-container">
        <div>
          <Link onClick={props.logout} to="/">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
