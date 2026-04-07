import React, { useState, useContext } from "react";
import { CartContext } from "../Context/cartContext";
import "../Componenets/NavBar.css";
import { useLocation } from "react-router-dom";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openButton, setIsOpenButton] = useState(false);
  const { cart } = useContext(CartContext);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Overlay behind mobile menu */}
      {isOpen && (
        <div className="nav-overlay" onClick={() => setIsOpen(false)} />
      )}

      <nav className={`nav-container ${!isHome ? "nav-solid" : ""}`}>
        {/* Logo */}
        <h2 className="logo">Shopify</h2>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => setIsOpen(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="mobile-only">
            <button className="btn-login">
              Login
            </button>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="searchDiv">
          <svg
            className="search-icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            className="search"
            placeholder="Search items, brands and categories"
          />
        </div>

        {/* Icons & Actions */}
        <div className="nav-actions">
          {/* Cart icon with badge */}
          <div className="cart-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="cart-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>

          <Link to="LoginModal">
            <button
              className="btn-login desktop-only"
              // onClick={() => setIsOpenButton(true)}
            >
              Login
            </button>
          </Link>

        

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className={isOpen ? "line open" : "line"}></span>
            <span className={isOpen ? "line open" : "line"}></span>
            <span className={isOpen ? "line open" : "line"}></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
