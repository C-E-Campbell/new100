import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
