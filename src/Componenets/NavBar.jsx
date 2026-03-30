// import "../Componenets/NavBar.css";
// import Hero from "../assets/hero.png";

// function NavBar() {
//   return (
//     <div>
//       <nav className="Nav-Container">
//         <h2 className="Hero-Name">Shopify</h2>

//         <ul className="nav1">
//           <li>
//             <a href="">Home</a>
//           </li>
//           <li>
//             <a href="">Products</a>
//           </li>
//           <li>
//             <a href="">About</a>
//           </li>
//         </ul>
//       </nav>
//       <nav>
//         <ul className="nav2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="size-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//             />
//           </svg>

//           <button className="btn1">Login</button>
//         </ul>
//       </nav>
//       <button className="hamburger">
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>
//     </div>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import "../Componenets/NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      {/* Logo */}
      <h2 className="logo">Shopify</h2>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        {/* Mobile-only CTA */}
        <li className="mobile-only">
          <button className="btn-login">Login</button>
        </li>
      </ul>

      {/* Icons & Actions */}
      <div className="nav-actions">
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
        <button className="btn-login desktop-only">Login</button>

        {/* Hamburger Menu */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
