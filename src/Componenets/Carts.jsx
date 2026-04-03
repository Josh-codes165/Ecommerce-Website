import { Carts } from "./Cart";
import "./Carts.css";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";

export function CartsDiv() {
  const { addToCart, viewProduct } = useContext(CartContext);

  return (
    <div className="cart-container1">
      <h3 className="cart-text">Discover what we have now!</h3>
      <div className="cart-container">
        {Carts.map((Cart, index) => (
          <div key={index} className="cart-div">
            <Link to="/productDetail" className="cart-image-wrapper">
              <img
                src={Cart.image}
                onClick={() => viewProduct(Cart)}
                alt={Cart.title}
                className="cart-images"
              />
              <div className="cart-overlay">
                <span className="cart-overlay-icon">🛒</span>
              </div>
            </Link>

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