import React from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Journal from "./pages/Journal/Journal.jsx";
import axios from "axios";
import moment from "moment";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  state = {
    userName: "",
    completedMovies: null,
    userId: null,
    start: "",
    finish: "",
    setMode: null,
    mode: ""
  };

  login = async (e, email, pass) => {
    e.preventDefault();
    try {
      const login = await axios.post("/users/login", {
        email: email,
        pass: pass
      });
      if (login.data.id) {
        this.setState({
          userId: login.data.id,
          userName: login.data.userName,
          email: login.data.email,
          start: login.data.start,
          finish: login.data.finish,
          setMode: login.data.setMode,
          mode: login.data.mode
        });
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

  register = async (e, user, pass, email) => {
    e.preventDefault();
    try {
      const startDate = moment().format("LL");
      const register = await axios.post("/users/register", {
        user: user,
        pass: pass,
        email: email,
        start: startDate,
        finish: 0
      });
      if (register.data.id) {
        this.setState({
          userId: register.data.id,
          userName: register.data.userName,
          email: register.data.email,
          start: register.data.start,
          finish: register.data.finish,
          setMode: register.data.setMode
        });
        this.props.history.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  logout = () => {
    console.log("hello");
    this.setState({
      userName: "",
      completedMovies: null,
      userId: "",
      start: "",
      finish: "",
      setMode: null,
      mode: ""
    });
  };

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route
          path="/register"
          render={() => <Register register={this.register} />}
        />
        <Route path="/login" render={() => <Login log={this.login} />} />
        <Route
          path="/dashboard"
          render={() => (
            <Dashboard
              logout={this.logout}
              mode={this.state.mode}
              diff={this.state.setMode}
              name={this.state.userName}
              start={this.state.start}
              finish={this.state.finish}
              id={this.state.userId}
            />
          )}
        />
        <Route path="/comments" component={Journal} />
      </Switch>
    );
  }
}

export default withRouter(App);
