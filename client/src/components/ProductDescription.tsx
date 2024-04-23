import { useState } from "react";
import "../styling/ProductDescription.css";
import SizeButton from "./SizeButton";
import type { Product } from "../types/types";
import type { Size } from "../types/types";
import type { CartItem } from "../types/types";

interface Props {
  product: Product; // The product description we want to display
  cartItems: CartItem[] | undefined; // The items in the shopping cart
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[] | undefined>>; // Setstate hook to set the items in the shopping cart
}

/**
 * Display the description of the product along with buttons to select various sizes.
 * Also handles Add product to cart functionality
 */
function ProductDescription({ product, cartItems, setCartItems }: Props) {
  const [selectedSize, setSelectedSize] = useState<Size>();

  /**
   * Add the product along with the selected size to the shopping cart
   */
  function addToCart() {
    // Check if the user selected a size
    if (selectedSize === undefined || selectedSize === null) {
      alert("You must select a size");
      console.log("You must select a size");
      return;
    }

    setCartItems((prev: CartItem[] | undefined) => {
      // if there are no items in the shopping cart THEN set the cart to this one item
      if (prev === undefined || prev === null) {
        const item: CartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          imageURL: product.imageURL,
          size: selectedSize,
          qty: 1,
        };
        return [item];
      }
      // If the cart already has the same item THEN just increment the item qty
      const itemIndex = cartItems?.findIndex((item: CartItem) => {
        return item.id === product.id && item.size.id === selectedSize.id;
      });
      if (itemIndex !== -1) {
        return prev.map((item: CartItem, index) => {
          if (index === itemIndex) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
      }
      // else the item is not in the shopping cart, so add the item to the cart
      else {
        const item: CartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          imageURL: product.imageURL,
          size: selectedSize,
          qty: 1,
        };
        return [...prev, item];
      }
    });
  }

  // Formatter to display the price in a currency style
  const formatter = new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
  });

  return (
    <div className="prod-image">
      <h1 className="descr-header">{product.title}</h1>
      <h3> {formatter.format(product.price)}</h3>
      <p className="descr-text">{product.description}</p>

      <p className="size-text">
        SIZE<em>*</em> <strong>{selectedSize?.label}</strong>
      </p>
      <div className="btn-container">
        {/* Display the size buttons */}
        {product.sizeOptions.map((size: Size) => {
          return (
            <SizeButton
              size={size}
              setSize={setSelectedSize}
              key={size.id}
              selected={size.id === selectedSize?.id ? true : false}
            />
          );
        })}
      </div>

      <div className="add-btn" onClick={() => addToCart()}>
        ADD TO CART
      </div>
    </div>
  );
}

export default ProductDescription;
