import React, { Component } from "react";
import Streak from "./Streak";
import "./StreakList.css";

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
      <div className="streaklist">
        {this.state.streaks.map(streak => (
          <Streak streak={streak} />
        ))}
      </div>
    );
  }
}

export default StreakList;
