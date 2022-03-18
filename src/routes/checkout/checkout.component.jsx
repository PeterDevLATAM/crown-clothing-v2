import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  console.log(cartTotal)
  return (
    <div>
      <h1>Total: {cartTotal}</h1>
      <table>
        <thead>
          <tr>
            <th colSpan={1}>Product</th>
            <th colSpan={1}>Description</th>
            <th colSpan={1}>Quantity</th>
            <th colSpan={1}>Price</th>
            <th colSpan={1}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return <CheckoutItem key={item.id} cartItem={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;
