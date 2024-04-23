import "../styling/NavBar.css";
import type { CartItem } from "../types/types";
import { useState } from "react";
import CartListing from "./CartListing";

interface Props {
  cartItems: CartItem[] | undefined; // The cart items to display
}

/**
 * Displays a navigation bar with a shopping cart button.
 * If the button is pressed a list of items are shown.
 */
function NavBar({ cartItems }: Props) {
  const [cartVisable, setCartVisable] = useState<boolean>(false);

  // Count the number of items in the cart
  let cartItemQty: number = 0;
  cartItems?.forEach((item: CartItem) => {
    cartItemQty += item.qty;
  });

  /**
   * Toggle the shopping cart overlay
   */
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
      {/* IF cartVisable THEN display then items in the shopping cart */}
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
