import React, { useContext, useState } from "react";
import "./App.css";
const Home = React.lazy(() => import("./Pages/Home"));
import { Suspense } from "react";
import { CartsDiv } from "./Componenets/Carts";
import { CartContext } from "./Context/cartContext";
import ProductDetail from "./Componenets/ProductDetail";
import { Route, Routes } from "react-router-dom";
import Spinner from "./Componenets/Spinner";
import NavBar from "./Componenets/NavBar";
const LoginModal = React.lazy(() => import("./Componenets/LoginModal"))
import Footer from "./Componenets/Footer";

function App() {
  const { selectedProduct } = useContext(CartContext);

  return (
    <>
      <div className="CTA">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <NavBar />

                <Home />
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="/productDetail"
            element={
              <div>
                <NavBar /> {selectedProduct ? <ProductDetail /> : <CartsDiv />}
              </div>
            }
          />
          <Route path="/LoginModal" element={<LoginModal />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
