import type { CartItem } from "../types/types";

interface Props {
  cartItem: CartItem; // The item to display
}

/**
 * Displays a product listing within a shopping cart.
 * An image will be displayed to the left and a description to the right.
 */
function CartListing({ cartItem }: Props) {
  // Formatter to display the price in a currency style
  const formatter = new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
  });

  return (
    <div className="cart-prod-container">
      <div className="cart-prod-img-container">
        <img className="cart-prod-img" src={cartItem.imageURL} />
      </div>
      <div className="cart-prod-descr">
        <p>{cartItem.title}</p>
        <p>
          {cartItem.qty} x <strong>{formatter.format(cartItem.price)}</strong>
        </p>
        <p>Size: {cartItem.size.label}</p>
      </div>
    </div>
  );
}

export default CartListing;
