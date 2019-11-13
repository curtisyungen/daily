import React, { Component, Fragment } from "react";
import Day from "./Day";

class Streak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: []
    };
  }

  componentDidMount = () => {
    fetch("/api/days").then(res => console.log(res));
  };

  render() {
    return (
      <Fragment>
        {this.state.days.map(day => (
          <Day day={day} />
        ))}
      </Fragment>
    );
  }
}

export default Streak;
