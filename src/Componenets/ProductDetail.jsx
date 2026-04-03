// // import { useContext } from "react";
// // import { CartContext } from "../Context/cartContext";

// // function ProductDetail() {
// //   const { selectedProduct, closeProduct, addToCart } = useContext(CartContext);
// //   const product = selectedProduct;

// //   const handleAddToCart = () => {
// //     addToCart(product);
// //     alert(`${product.title} added to cart!`);
// //   };

// //   return (
// //     <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
// //       {/* Back button — like Jumia's breadcrumb */}
// //       <button
// //         // onClick={handleNavigate}
// //         // style={{
// //         //   backgroundColor: "#4ade80",
// //         //   color: "#0f172a",
// //         //   padding: "0.6rem 1.5rem",
// //         //   border: "none",
// //         //   borderRadius: "6px",
// //         //   marginBottom: "10px",
// //         //   fontWeight: "700",
// //         //   cursor: "pointer",
// //         //   transition: "all 0.2s ease",
// //         // }}
// //         // className="btn-logins"
// //       >
// //         ← Back to Products
// //       </button>

// //       <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
// //         {/* Product Image */}
// //         <img
// //           src={product.image}
// //           alt={product.title}
// //           style={{
// //             width: "100%",
// //             height: "300px",
// //             aspectRatio: "1 / 1",
// //             objectFit: "cover",
// //             display: "block",
// //             borderRadius: "8px",
// //           }}
// //         />

// //         {/* Product Info */}
// //         <div style={{ flex: 1 }}>
// //           <h2>{product.title}</h2>
// //           <p style={{ fontSize: "24px", fontWeight: "bold", color: "#f68b1e" }}>
// //             {product.price}
// //           </p>

// //           {/* Extra info like Jumia */}
// //           <p>✅ In Stock</p>
// //           <p>🚚 Free Delivery Available</p>
// //           <p>🔄 7-day return policy</p>

// //           <button
// //             className="btn-logins"
// //             onClick={handleAddToCart}
// //             style={{
// //               marginTop: "20px",
// //               padding: "12px 30px",
// //               fontSize: "16px",
// //             }}
// //           >
// //             Add to Cart
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProductDetail;

// import { useContext } from "react";
// import { CartContext } from "../Context/cartContext";
// import { useNavigate } from "react-router-dom";

// function ProductDetail() {
//   const { selectedProduct, closeProduct, addToCart } = useContext(CartContext);
//   const product = selectedProduct;
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     addToCart(product);
//     alert(`${product.title} added to cart!`);
//   };

//   const handleNavigate = () => {
//     navigate(-1);
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
//       {/* Back button — like Jumia's breadcrumb */}
//       <button
//         onClick={handleNavigate}
//         // style={{ marginBottom: "20px", cursor: "pointer" }}
//         style={{
//           backgroundColor: "#4ade80",
//           color: "#0f172a",
//           padding: "0.6rem 1.5rem",
//           border: "none",
//           borderRadius: "6px",
//           marginBottom: "10px",
//           fontWeight: "700",
//           cursor: "pointer",
//           transition: "all 0.2s ease",
//         }}
//       >
//         ← Back to Products
//       </button>

//       <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
//         {/* Product Image */}
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{
//             width: "400px",
//             height: "400px",
//             objectFit: "cover",
//             borderRadius: "8px",
//           }}
//         />

//         {/* Product Info */}
//         <div style={{ flex: 1 }}>
//           <h2>{product.title}</h2>
//           <p
//             style={{
//               margin: "15px 0",
//               fontSize: "1.2rem",
//               color: "black",
//               maxWidth: "900px",
//             }}
//           >
//             {product.description}
//           </p>
//           <p style={{ fontSize: "24px", fontWeight: "bold", color: "#f68b1e", marginBottom: "5px" }}>
//             {product.price}
//           </p>

//           {/* Extra info like Jumia */}
//           <p style={{marginBottom: "5px"}}>✅ In Stock</p>
//           <p style={{marginBottom: "5px"}}>🚚 Free Delivery Available</p>
//           <p style={{marginBottom: "5px"}}>🔄 7-day return policy</p>

//           <button
//             className="btn-logins"
//             onClick={handleAddToCart}
//             style={{
//               marginTop: "20px",
//               padding: "12px 30px",
//               fontSize: "16px",
//             }}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;


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
        ← Back to Products
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