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
    fetch("/api/days")
      .then(res => res.json())
      .then(days => this.setState({ days }));
  };

  render() {
    return (
      <Fragment>
        {this.state.days.map(day => (
          <Day key={day.id} day={day} />
        ))}
      </Fragment>
    );
  }
}

export default Streak;
