import React, { Component } from "react";
import cn from "classnames";
import "./Day.css";

class Day extends Component {
  render() {
    const { id, complete } = this.props.day;
    const classNames = cn({ [complete]: "complete" }, "day");
    return <div className={classNames}>{id}</div>;
  }
}

export default Day;
