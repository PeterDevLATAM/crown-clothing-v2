import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, substractItemFromCart, removeItemFromCart}=useContext(CartContext)
  const { name, price, quantity, imageUrl } = cartItem;
    const incrementItemOnCart=()=>addItemToCart(cartItem)
    const decrementItemOnCart=()=>substractItemFromCart(cartItem)
    const removeItemOnCart=()=>removeItemFromCart(cartItem)

  return (
    <tr>
      <td>
        <img src={imageUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>
        <div className="ammount" onClick={decrementItemOnCart}>-</div> {quantity}
        <div className="ammount" onClick={incrementItemOnCart}>+</div>
      </td>
      <td>{price}</td>
      <td className="remove" onClick={removeItemOnCart}>X</td>
    </tr>
  );
};

export default CheckoutItem;
