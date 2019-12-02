import React, { Component } from "react";
import Home from "./Home";
import Welcome from "./Welcome";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Shailendra"
    };
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && <Welcome user={this.state.user} />}

        <Home user={this.state.user} />
      </div>
    );
  }
}

export default App;
