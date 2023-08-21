import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img className="logo" src="/images/brand.png" alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="btn">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
