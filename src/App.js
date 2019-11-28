import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Journal from "./pages/Journal/Journal.jsx";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    userName: "",
    completedMovies: null,
    userId: null
  };

  setUserInfo = async (name, id, movies) => {
    this.setState({
      userName: name,
      userId: id,
      completedMovies: movies
    });
  };

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/register" component={Register} />
        <Route
          path="/login"
          render={() => <Login getUser={this.setUserInfo} />}
        />
        <Route
          path="/dashboard"
          render={() => (
            <Dashboard
              getUserInfo={this.getUserInfo}
              username={this.state.userName}
              userId={this.state.userId}
              completedMovies={this.state.completedMovies}
            />
          )}
        />
        <Route
          path="/comments"
          render={() => <Journal userId={this.state.userId} />}
        />
      </Switch>
    );
  }
}

export default App;
