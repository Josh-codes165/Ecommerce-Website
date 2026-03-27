import Cart from "../assets/Cart.jpg";
import "./Hero.css";

function HeroSection() {
  return (
    <div className="HeroContainer">
      <img src={Cart} alt="" className="HeroImage" />
      <div className="Heros">
        <div className="HeroTexts">
          <h1>Elevate Your Everyday</h1>
          <p>
            Discover the new Shopify collection, where premium quality meets
            conscious design.
          </p>
        </div>
        <div className="HeroButtons">
          <button className="btn1">Buy Now</button>
          <button className="btn2">Pre Order</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
