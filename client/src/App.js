import React, { Component } from "react";
import Navbar from "./components/Navbar";
import StreakList from "./components/StreakList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streaks: []
    };
  }

  addItem = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <Navbar addItem={this.addItem} />
        <StreakList />
      </div>
    );
  }
}

export default App;
