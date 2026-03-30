import Cart from "../assets/Cart.jpg";
import "./Hero.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroSection() {

  useGSAP(() => {
    gsap.fromTo(".Text1", {
      y: 60,
      opacity: 0
    }, {
      y: 0,
      opacity: "100%",
      ease: "power1.inOut"
    })
  }, [])
  useGSAP(() => {
    gsap.fromTo(".btn-login", {
      y: 90,
      opacity: 0
    }, {
      y: 0,
      opacity: "100%",
      ease: "power1.inOut",
      delay: 1,
      stagger: 0.1
    })
  }, [])
  useGSAP(() => {
    gsap.fromTo(".btn2", {
      y: 90,
      opacity: 0
    }, {
      y: 0,
      opacity: "100%",
      ease: "power1.inOut",
      delay: 1,
      stagger: 0.1
    })
  }, [])
  return (
    <div className="HeroContainer">
      <img src={Cart} alt="" className="HeroImage" />
      <div className="Heros">
        <div className="HeroTexts">
          <h1 className="Text1">Elevate Your Everyday</h1>
          <p className="Text1">
            Discover the new Shopify collection, where premium quality meets
            conscious design.
          </p>
        </div>
        <div className="HeroButtons">
          <button className="btn-login">Buy Now</button>
          <button className="btn2">Pre Order</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
