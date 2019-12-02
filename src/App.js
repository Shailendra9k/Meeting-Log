import React, { Component } from "react";
import Home from "./Home";
import Welcome from "./Welcome";
import Navigation from "./components/Navigation";
import { Router } from "@reach/router";
import Login from "./components/Login";
import Register from "./components/Register";
import Meetings from "./components/Meetings";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && <Welcome user={this.state.user} />}
        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Register path="/register" />
          <Meetings path="/meetings" />
        </Router>
      </div>
    );
  }
}

export default App;
