import React from "react";
import { Wrapper } from "./Cart.style";
import CartItem from "./CartItem";
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clicked: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
      <h2>Total: {calculateTotal(cartItems).toFixed(2)} EUR</h2>
    </Wrapper>
  );
};

export default Cart;
