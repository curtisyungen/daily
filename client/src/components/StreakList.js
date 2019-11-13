import React, { Component, Fragment } from "react";
import Streak from "./Streak";

class StreakList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streaks: []
    };
  }

  componentDidMount = () => {
    this.getStreaks();
  };

  getStreaks = () => {
    fetch("/api/streaks")
      .then(res => res.json())
      .then(streaks => this.setState({ streaks }));
  };

  render() {
    return (
      <Fragment>
        {this.state.streaks.map(streak => (
          <Streak streak={streak} />
        ))}
      </Fragment>
    );
  }
}

export default StreakList;
