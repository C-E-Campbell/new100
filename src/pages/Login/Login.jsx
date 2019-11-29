import React, { Component } from "react";
import HomeHeader from "../../components/Shared/HomeOnlyHeader/HomeOnlyHeader";
import "../Register/Register.style.scss";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Register extends Component {
  state = {
    email: "",
    pass: ""
  };
  notify = () => {
    toast("I cannot be duplicated !");
  };
  login = async e => {
    e.preventDefault();
    try {
      const login = await axios.post("/users/login", {
        email: this.state.email,
        pass: this.state.pass
      });
      if (login.data.id) {
        this.props.history.push("/dashboard");
      }
    } catch (err) {
      toast.configure();
      const notify = () =>
        toast.error("Email or Password may be invalid.", {
          autoClose: 2000
        });
      notify();
      console.log(err);
    }
  };

  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <div className="register-container">
          <div className="form-container" data-aos="fade" data-aos-delay="50">
            <h2>Login</h2>
            <form onSubmit={e => this.login(e)}>
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
