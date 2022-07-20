import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

//CSS
import classes from './styles/Header.module.css'

//Image 
import mealsImage from "../../assets/meals.jpg"


const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='Table Full Of Food!' />
    </div>
  </Fragment>;
};

export default Header;
