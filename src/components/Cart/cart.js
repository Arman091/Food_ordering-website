import classes from "./cart.module.css";
import CartValue from "../myassets/context";
import { useContext } from "react";
import Modal from "../UI/modal";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartctxt = useContext(CartValue);
  const totalPrice = `$${cartctxt.totalPrice.toFixed(2)}`;
  const hasItem = cartctxt.items.length > 0;

  const onRemoveHandler = (id) => {
    cartctxt.removeItem(id);
  };
  const onAddHandler = (item) => {
    const cartItem = { ...item, amount: 1 };
    cartctxt.addItem(cartItem);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctxt.items.map((item) => (
        <CartItem
          key={Math.random()}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={onRemoveHandler.bind(null, item.id)}
          // or onRemove={() => cartItemRemoveHandler(item.id)} thisis the way to pass arguments
          onAdd={() => onAddHandler(item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
