import "../styling/NavBar.css";
import type { CartItem } from "../types/types";
import { useState } from "react";
import CartListing from "./CartListing";

interface Props {
  cartItems: CartItem[] | undefined;
}

function NavBar({ cartItems }: Props) {
  const [cartVisable, setCartVisable] = useState<boolean>(false);

  // Count the number of items in the cart
  let cartItemQty: number = 0;
  cartItems?.forEach((item: CartItem) => {
    cartItemQty += item.qty;
  });

  function toggleCart() {
    setCartVisable((prev) => {
      return !prev;
    });
  }

  return (
    <>
      <div className="nav-bar">
        <div onClick={() => toggleCart()} className="cart-button">
          My Cart &#40; {cartItemQty} &#41;
        </div>
      </div>
      {cartVisable ? (
        <div className="cart-container">
          {cartItems?.map((item: CartItem) => {
            return <CartListing cartItem={item} key={`${item.id}${item.size.id}`} />;
          })}
        </div>
      ) : null}
    </>
  );
}

export default NavBar;
