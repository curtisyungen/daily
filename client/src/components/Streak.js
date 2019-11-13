import React, { Component } from "react";
import "./Streak.css";

class Streak extends Component {
  render() {
    const { id, title, days } = this.props.streak;
    return (
      <div className="streak">
        <p>{id}</p>
        <p>{title}</p>
        <p>{days}</p>
      </div>
    );
  }
}

export default Streak;
