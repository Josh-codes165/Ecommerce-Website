import { Carts } from "./Cart";
import "./Carts.css";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { useNavigate } from "react-router-dom";

export function CartsDiv() {
  const { viewProduct } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProductClick = (cart) => {
    viewProduct(cart); // 1. save product to context
    navigate("/productDetail"); // 2. then navigate
  };

  return (
    <div className="cart-container1">
      <h3 className="cart-text">Discover what we have now!</h3>
      <div className="cart-container">
        {Carts.map((Cart, index) => (
          <div key={index} className="cart-div">
            <div
              className="cart-image-wrapper"
              onClick={() => handleProductClick(Cart)}
            >
              <img
                src={Cart.image}
                alt={Cart.title}
                loading="lazy"
                className="cart-images"
              />
              <div className="cart-overlay">
                <span className="cart-overlay-icon">🛒</span>
              </div>
             
            </div>

            <div className="cart-info">
              <h3 className="cart-title">{Cart.title}</h3>
              <p className="cart-price">{Cart.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
