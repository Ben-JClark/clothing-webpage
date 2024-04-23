import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styling/App.css";
import NavBar from "./components/NavBar";
import ProductDescription from "./components/ProductDescription";
import ProductImage from "./components/ProductImage";
import { Product } from "./types/types";
import type { CartItem } from "./types/types";

function App() {
  const [product, setProduct] = useState<Product>();
  const [cartItems, setCartItems] = useState<CartItem[]>();

  // Fetch the Product
  useEffect(() => {
    async function getProduct() {
      try {
        const requestData = await axios.get("https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product");
        const product: Product = requestData.data;
        setProduct(product);
      } catch (error) {
        console.error("Error fetching the product: ", error);
      }
    }
    getProduct();
  }, []);

  return (
    <>
      <NavBar cartItems={cartItems} />
      {product ? (
        <div className="prod-container">
          <ProductImage imageURL={product.imageURL} />
          <ProductDescription product={product} cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
