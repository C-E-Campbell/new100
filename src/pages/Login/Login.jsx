import React, { Component } from "react";
import HomeHeader from "../../components/Shared/HomeOnlyHeader/HomeOnlyHeader";
import "../Register/Register.style.scss";
import "react-toastify/dist/ReactToastify.css";

export default class Register extends Component {
  state = {
    email: "",
    pass: ""
  };

  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <div className="register-container">
          <div className="form-container" data-aos="fade" data-aos-delay="50">
            <h2>Login</h2>
            <form
              onSubmit={e =>
                this.props.log(e, this.state.email, this.state.pass)
              }
            >
              <label>Email</label>
              <input
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                type="email"
              />
              <label>Password</label>
              <input
                value={this.state.pass}
                onChange={e => this.setState({ pass: e.target.value })}
                type="password"
              />
              <button className="signUpBtn">Login</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
