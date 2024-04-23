import { useState } from "react";
import "../styling/ProductDescription.css";
import SizeButton from "./SizeButton";
import type { Product } from "../types/types";
import type { Size } from "../types/types";
import type { CartItem } from "../types/types";

interface Props {
  product: Product;
  cartItems: CartItem[] | undefined;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[] | undefined>>;
}

function ProductDescription({ product, cartItems, setCartItems }: Props) {
  const [selectedSize, setSelectedSize] = useState<Size>();

  function addToCart() {
    // Check if the user selected a size
    if (selectedSize === undefined || selectedSize === null) {
      alert("You must select a size");
      console.log("You must select a size");
      return;
    }

    setCartItems((prev: CartItem[] | undefined) => {
      // if there are no items in the shopping cart
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
      // Check if the cart already has the same item, if so just increment the item qty
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

      // else add the item to the cart
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
