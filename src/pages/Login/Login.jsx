import React, { Component } from "react";
import HomeHeader from "../../components/Shared/HomeOnlyHeader/HomeOnlyHeader";
import "../Register/Register.style.scss";

export default class Register extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <div className="register-container">
          <div className="form-container">
            <h2>Login</h2>
            <form>
              <label>Username</label>
              <input type="text" />
              <label>Email</label>
              <input type="email" />
              <button className="signUpBtn">Login</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
