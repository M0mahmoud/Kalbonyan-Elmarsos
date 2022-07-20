import React, { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    console.log("USER_UNMOUNT"); //repeat 3 times
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
