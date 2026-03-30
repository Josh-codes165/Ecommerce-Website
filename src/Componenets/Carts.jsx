import { Carts } from "./Cart";
import "./Carts.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import { useRef } from "react";

export function CartsDiv() {
  // gsap.registerPlugin(ScrollTrigger);

  // const scrollRef = useRef();

  // useGSAP(
  //   () => {
  //     const scroll = gsap.utils.toArray(scrollRef.current.children);
  //     scroll.forEach((scrol) => {
  //       gsap.fromTo(
  //         scrol,
  //         {
  //           opacity: 0,
  //           y: 50,
  //         },
  //         {
  //           y: 0,
  //           opacity: "100%",
  //           stagger: 0.1,
  //           delay: 1,
  //           ease: "power1.inOut",
  //           scrollTrigger: {
  //             trigger: scrol,
  //             start: "top 10%",
  //             end: "bottom bottom",
  //             scrub: true,
  //           },
  //         },
  //       );
  //     });
  //   },
  //   { scope: scrollRef },
  // );
  return (
    <div className="cart-container1">
      <h3 className="cart-text">Discover what we have now!</h3>
      <div className="cart-container">
        {Carts.map((Cart, index) => (
          <div key={index} className="cart-div">
            <img src={Cart.image} alt={Cart.title} className="cart-images" />
            <h3>{Cart.title}</h3>
            <p>{Cart.price}</p>
            <button className="btn-login">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
