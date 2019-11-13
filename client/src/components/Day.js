import React, { Component } from "react";

class Day extends Component {
  render() {
    const { id, complete } = this.props.day;
    return <div>{id}</div>;
  }
}

export default Day;
