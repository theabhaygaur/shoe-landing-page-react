import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1 className="main-text">
          YOUR FEET <span className="special-text">DESERVE</span> THE{" "}
          <span className="special-text">BEST</span>
        </h1>
        <p className="para-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe atque
          mollitia aliquid animi earum iure excepturi possimus minus rem quas!
        </p>
        <div className="hero-button">
          <button className="btn">Shop</button>
          <button className="btn">Category</button>
        </div>
        <div className="shopping">
          <p>Available on...</p>
          <div className="brand-icons">
            <img className="icon-1" src="images/myntra.png" alt="" />
            <img className="icon-1" src="images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
