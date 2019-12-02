import React, { Component } from "react";
import Home from "./Home";
import Welcome from "./Welcome";

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
        {this.state.user && <Welcome user={this.state.user} />}

        <Home user={this.state.user} />
      </div>
    );
  }
}

export default App;
