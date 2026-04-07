
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail() {
  const { selectedProduct, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const product = selectedProduct;

  // Guard — if someone lands here with no product, send them back
  if (!product) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <p>No product selected.</p>
        <button className="btn-back" onClick={() => navigate("/")}>
          ← Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="detail-page">
      <button className="btn-back" onClick={() => navigate(-1)}>
        ← 
      </button>

      <div className="detail-layout">
        <img
          src={product.image}
          alt={product.title}
          className="detail-image"
        />

        <div className="detail-info">
          <h2 className="detail-title">{product.title}</h2>

          {product.description && (
            <p className="detail-description">{product.description}</p>
          )}

          <p className="detail-price">{product.price}</p>

          <div className="detail-badges">
            <span className="badge">✅ In Stock</span>
            <span className="badge">🚚 Free Delivery</span>
            <span className="badge">🔄 7-day Returns</span>
          </div>

          <button className="btn-logins detail-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;