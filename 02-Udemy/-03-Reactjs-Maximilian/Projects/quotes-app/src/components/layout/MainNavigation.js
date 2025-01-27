import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./styles/MainNavigation.module.css";

function MainNavigation() {
  return <header className={classes.header}>
  <div  className={classes.logo}>Great Qoutes</div>
  <nav  className={classes.nav}>
    <ul>
      <li>
        <NavLink to='/quotes' className={classes.active}>All Qoutes</NavLink>
      </li>
      <li>
        <NavLink to='/new-quote' className={classes.active}>Add A Quote</NavLink>
      </li>
    </ul>
  </nav>
  </header> 
}

export default MainNavigation;
