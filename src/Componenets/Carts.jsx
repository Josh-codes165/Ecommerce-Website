import { Carts } from "./Cart";
import "./Carts.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import { useContext, useRef } from "react";
import { CartContext } from "../Context/cartContext";

export function CartsDiv() {
  const {addToCart} = useContext(CartContext)
  
  return (
    <div className="cart-container1">
      <h3 className="cart-text">Discover what we have now!</h3>
      <div className="cart-container">
        {Carts.map((Cart, index) => (
          <div key={index} className="cart-div">
            <img src={Cart.image} alt={Cart.title} className="cart-images" />
            <h3>{Cart.title}</h3>
            <p>{Cart.price}</p>
            <button className="btn-logins"
            onClick={() => addToCart(Cart)}
            >Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
