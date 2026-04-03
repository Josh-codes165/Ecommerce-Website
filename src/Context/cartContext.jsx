import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    const existingCart = cart.find((item) => item.id === product.id);
    if (existingCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const viewProduct = (product) => setSelectedProduct(product);
  const closeProduct = () => setSelectedProduct(null);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, selectedProduct, viewProduct, closeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
