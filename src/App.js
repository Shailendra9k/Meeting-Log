import React, { Component } from "react";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  render() {
    return <Home user={this.state.user} />;
  }
}

export default App;
