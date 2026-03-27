import { Carts } from "./Cart";
import "./Carts.css";

export function CartsDiv() {
  return (
    <div className="cart-container1">
      <h3 className="cart-text">Discover what we have now!</h3>
      <div className="cart-container">
        {Carts.map((Cart, index) => (
          <div key={index} className="cart-div">
            <img src={Cart.image} alt={Cart.title} className="cart-images" />
            <h3>{Cart.title}</h3>
            <p>{Cart.price}</p>
            <button className="btn1">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
