import { useContext } from "react";
import { CartContext } from "./cartContext";

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default CartPage