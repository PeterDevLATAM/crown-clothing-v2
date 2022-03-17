import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./cart-item.styles.scss";


const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div>
      <div>{name}</div>
      <span>{quantity}</span>
    </div>
  );
};
export default CartItem;
