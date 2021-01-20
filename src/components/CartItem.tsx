import React from "react";
import Button from "@material-ui/core/Button";
import { CartItemType } from "../App";
import { Wrapper } from "./CartItem.style";

type Props = {
  item: CartItemType;
  addToCart: (clicked: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="info">
          <p>Price: {item.price} EUR</p>
          <p>Total: {(item.amount * item.price).toFixed(2)} EUR</p>
        </div>
        <div className="buttons">
          <Button size="small" variant="contained" disableElevation onClick={() => removeFromCart(item.id)}>
            -
          </Button>
          <p>{item.amount}</p>
          <Button size="small" variant="contained" disableElevation onClick={() => addToCart(item)}>
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt="" />
    </Wrapper>
  );
};

export default CartItem;
