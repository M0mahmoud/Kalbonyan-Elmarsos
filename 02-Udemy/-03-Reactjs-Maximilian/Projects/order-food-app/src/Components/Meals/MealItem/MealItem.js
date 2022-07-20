import {useContext} from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-Context";

import classes from './styles/MealItem.module.css'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  let price = `$${props.price}`

  const addCartHandler =amount =>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.descriptio}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
