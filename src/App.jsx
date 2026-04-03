import React,{ useContext, useState } from "react";
import "./App.css";
const Home = React.lazy(() => import("./Pages/Home"))
import { Suspense } from "react";
import HeroSection from "./Componenets/Hero";
import { CartsDiv } from "./Componenets/Carts";
import { CartContext } from "./Context/cartContext";
import ProductDetail from "./Componenets/ProductDetail";
import { Route, Routes } from "react-router-dom";
import Spinner from "./Componenets/Spinner";

function App() {
  const { selectedProduct } = useContext(CartContext);

  return (
    <>
      <div className="CTA">
        <Routes>
          <Route path="/" element={<Suspense fallback={<Spinner/>}>
            <Home />
          </Suspense>} />
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
