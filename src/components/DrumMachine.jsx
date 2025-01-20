import React from "react";
import { drumpads } from "./constants";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Press a key",
    };
    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    const key = e.key.toUpperCase();
    const id = drumpads.find((drumpad) => drumpad.keyTrigger === key);
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0; // Reset audio to start
      audio.play().catch((error) => console.log(error));
      this.setState({ display: id ? id.id : "" });
      setTimeout(() => this.setState({ display: "Press a key" }), 1000);
    }
  }

  onKeyPress(e) {
    const id = e.target.children[0].id;
    let audio = document.getElementById(id);
    if (audio) {
      audio.currentTime = 0; // Reset audio to start
      audio.play().catch((error) => console.log(error));
      this.setState({ display: id ? id.id : "" });

      setTimeout(() => this.setState({ display: "Press a key" }), 1000);
    }
  }

  render() {
    return (
      <div
        className="container-fluid d-flex bg-light p-2 flex-wrap"
        style={{
          maxWidth: "600px",
          maxHeight: "30vh",
          borderRadius: "20px",
          border: "2px solid yellow",
        }}
      >
        <div
          className="container-fluid mt-2 d-flex align-items-center"
          style={{ width: "100%", height: "15px" }}
        >
          <p
            className="text-center"
            style={{ color: "blue", marginLeft: "auto" }}
          >
            Niplan
          </p>
          <img
            src={this.props.logo}
            alt="logo"
            className="align-self-center text-center"
            style={{ maxHeight: "10px", marginTop: "-10px", marginLeft: "2px" }}
          />
        </div>
        <div className="container" style={{ width: "50%" }}>
          <div className="row">
            {drumpads.slice(0, 9).map((drumpad, index) => (
              <div className="col-4" key={index}>
                <button
                  className="drum-pad btn btn-secondary mt-2"
                  style={{ width: "100%", height: "50px" }}
                  id={drumpad.keyTrigger.toLowerCase()}
                  onClick={this.onKeyPress}
                >
                  {drumpad.keyTrigger}
                  <audio
                    src={drumpad.url}
                    className="clip"
                    id={drumpad.keyTrigger}
                  ></audio>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div
          className="container-fluid text-center justify-content-center text-center"
          style={{ width: "50%", marginTop: "7%" }}
        >
          <div
            className="power container d-flex flex-column text-center bg-red"
            style={{ width: "80%" }}
          >
            <p className="text-dark">Power</p>
            <div className="form-check form-switch">
              <input
                className="form-check-input bg-dark"
                type="checkbox"
                id="flexSwitchCheckDefault"
                style={{ width: "30%", marginLeft: "22%" }}
              />
            </div>
          </div>

          <p
            id="display"
            className="container mt-1 bg-dark text-light"
            style={{
              width: "70%",
              height: "40px",
              backgroundColor: "green",
              fontSize: "20px",
            }}
          >
            {this.state.display}
          </p>
          <div className="form-range">
            <input
              type="range"
              className="form-range"
              id="customRange1"
              style={{ width: "80%" }}
            />
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input bg-dark"
              type="checkbox"
              id="flexSwitchCheckDefault"
              style={{ width: "20%", marginLeft: "32%" }}
            />
          </div>
        </div>
      </div>
    );
    /* return (
      <div
        className="container d-flex bg-light p-2 flex-wrap"
        style={{
          width: "30%",
          height: "30vh",
          borderRadius: "20px",
          border: "2px solid yellow",
        }}
      >
        <div
          className="container mt-2 d-flex align-items-center"
          style={{ width: "100%", height: "15px" }}
        >
          <p
            className="text-center"
            style={{ color: "blue", marginLeft: "auto" }}
          >
            Niplan
          </p>
          <img
            src={this.props.logo}
            alt="logo"
            className="align-self-center text-center"
            style={{ maxHeight: "10px", marginTop: "-10px", marginLeft: "2px" }}
          />
        </div>
        <div
          className="div-pad container d-flex flex-column justify-content-evenly"
          style={{ width: "50%", height: "100%" }}
        >
          <div className="row d-flex gap-2">
            <button
              className="drum-pad btn btn-secondary col-sm"
              id="pad-q"
              key="q"
              onClick={this.onKeyPress}
            >
              Q
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
                className="clip"
                id="Q"
              ></audio>
            </button>
            <button
              className="drum-pad btn btn-secondary col-sm"
              key="w"
              id="pad-w"
              onClick={this.onKeyPress}
            >
              W
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
                className="clip"
                id="W"
              ></audio>
            </button>
            <button
              key="e"
              className="drum-pad btn btn-secondary col-sm"
              id="pad-e"
              onClick={this.onKeyPress}
            >
              E
              <audio
                className="clip"
                id="E"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
              ></audio>
            </button>
          </div>
          <div className="row d-flex gap-2">
            <button
              key="a"
              className="drum-pad btn btn-secondary col-sm"
              id="pad-a"
              onClick={this.onKeyPress}
            >
              A
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
                className="clip"
                id="A"
              ></audio>
            </button>
            <button
              key="s"
              className="drum-pad btn btn-secondary col-sm"
              id="pad-s"
              onClick={this.onKeyPress}
            >
              S
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
                className="clip"
                id="S"
              ></audio>
            </button>
            <button
              key="z"
              className="drum-pad btn btn-secondary col-sm"
              id="pad-z"
              onClick={this.onKeyPress}
            >
              Z
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
                className="clip"
                id="Z"
              ></audio>
            </button>
          </div>
          <div className="row d-flex gap-2">
            <button
              key="x"
              className="drum-pad btn btn-secondary col-sm"
              id="pad-x"
              onClick={this.onKeyPress}
            >
              X
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
                className="clip"
                id="X"
              ></audio>
            </button>
            <button
              key="c"
              className="drum-pad btn btn-secondary col-sm"
              id="pad-c"
              onClick={this.onKeyPress}
            >
              C
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
                className="clip"
                id="C"
              ></audio>
            </button>
            <button
              className="drum-pad btn btn-secondary col-sm"
              key="d"
              id="pad-d"
              onClick={this.onKeyPress}
            >
              D
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
                className="clip"
                id="D"
              ></audio>
            </button>
          </div>
        </div>
        <div
          className="container-fluid text-center justify-content-center text-center"
          style={{ width: "50%", marginTop: "7%" }}
        >
          <div
            className="power container d-flex flex-column text-center bg-red"
            style={{ width: "80%" }}
          >
            <p className="text-dark">Power</p>
            <div className="form-check form-switch">
              <input
                className="form-check-input bg-dark"
                type="checkbox"
                id="flexSwitchCheckDefault"
                style={{ width: "30%", marginLeft: "22%" }}
              />
            </div>
          </div>

          <p
            id="display"
            className="container mt-1 bg-dark text-light"
            style={{
              width: "70%",
              height: "40px",
              backgroundColor: "green",
              fontSize: "20px",
            }}
          >
            {this.state.display}
          </p>
          <div className="form-range">
            <input
              type="range"
              className="form-range"
              id="customRange1"
              style={{ width: "80%" }}
            />
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input bg-dark"
              type="checkbox"
              id="flexSwitchCheckDefault"
              style={{ width: "20%", marginLeft: "32%" }}
            />
          </div>
        </div>
      </div>
    );*/
  }
}

export default DrumMachine;
