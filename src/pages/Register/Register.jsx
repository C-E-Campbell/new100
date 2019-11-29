import React, { Component } from "react";
import HomeHeader from "../../components/Shared/HomeOnlyHeader/HomeOnlyHeader";
import "./Register.style.scss";
import axios from "axios";
import moment from "moment";

export default class Register extends Component {
  state = { email: "", pass: "", user: "" };

  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <div className="register-container">
          <div className="form-container" data-aos="fade" data-aos-delay="50">
            <h2>Sign Up</h2>
            <form
              onSubmit={e =>
                this.props.register(
                  e,
                  this.state.user,
                  this.state.pass,
                  this.state.email
                )
              }
            >
              <label>Email</label>
              <input
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                type="email"
              />
              <label>Username</label>
              <input
                value={this.state.user}
                onChange={e => this.setState({ user: e.target.value })}
                type="text"
              />
              <label>Password</label>
              <input
                value={this.state.pass}
                onChange={e => this.setState({ pass: e.target.value })}
                type="password"
              />
              <button className="signUpBtn">Register</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
