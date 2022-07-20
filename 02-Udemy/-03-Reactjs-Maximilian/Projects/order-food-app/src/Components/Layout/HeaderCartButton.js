import { useContext, useEffect, useState } from "react";

import CardIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";

import classes from "./styles/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  //Context
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((number, item) => {
    return number + item.amount;
  }, 0);

  // For Animation && Use Effect To Use it Every Time U Add A New Item
  const [btnHighLighted, SetBtnHighLighted] = useState(false);
  const btnClasses = `${classes.button} ${btnHighLighted ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    SetBtnHighLighted(true);

    //To Remove Class After Add
    const timer = setTimeout(() => {
      SetBtnHighLighted(false);
    }, 300);

    //Clean Up Funtion
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
