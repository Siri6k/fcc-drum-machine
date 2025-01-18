import React, { Component } from "react";
import DrumMachine from "./components/DrumMachine";
import logo from "./assets/niplan.png";

class App extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column min-vh-100 min-vw-100 align-items-center justify-content-center bg-dark text-light"
        id="drum-machine"
      >
        <DrumMachine logo={logo} />
        <p className="text-center">Coded by -Sirisk</p>
      </div>
    );
  }
}

export default App;
