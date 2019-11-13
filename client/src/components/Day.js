import React, { Component } from "react";
import cn from "classnames";
import "./Day.css";

class Day extends Component {
  render() {
    const { date, complete } = this.props.day;
    const classNames = cn(complete ? "complete" : "", "day");

    return <div className={classNames}></div>;
  }
}

export default Day;
