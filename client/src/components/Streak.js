import React, { Component } from "react";
import Day from "./Day";
import "./Streak.css";

class Streak extends Component {
  render() {
    const { id, title, days } = this.props.streak;
    console.log(days);
    return (
      <div className="streak">
        <p>{id}</p>
        <p>{title}</p>
        {days.map(day => (
          <Day key={day.date} day={day} />
        ))}
      </div>
    );
  }
}

export default Streak;
