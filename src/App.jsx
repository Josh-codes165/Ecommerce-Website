import { useContext, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import HeroSection from "./Componenets/Hero";
import { CartsDiv } from "./Componenets/Carts";
import { CartContext } from "./Context/cartContext";
import ProductDetail from "./Componenets/ProductDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  const { selectedProduct } = useContext(CartContext);

  return (
    <>
      <div className="CTA">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/productDetail"
            element={
              <div>{selectedProduct ? <ProductDetail /> : <CartsDiv />}</div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
