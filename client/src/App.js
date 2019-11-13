import React, { Component } from "react";
import Streak from "./components/Streak";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Streak />
      </div>
    );
  }
}

export default App;
