import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Most Popular Products</h2>
        <p>Mobile Suits of many varieties</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
