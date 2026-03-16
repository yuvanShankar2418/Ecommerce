import React from "react";

function About() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      
      
      <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
        About Dress Shop
      </h2>

      
      <p style={{ fontSize: "18px", maxWidth: "700px", margin: "auto" }}>
        Welcome to <b>Dress Shop</b>  your one-stop destination for stylish,
        modern, and affordable dresses. We believe fashion should be comfortable,
        trendy, and accessible for everyone.
      </p>

      
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ fontSize: "26px" }}>Our Story</h3>
        <p style={{ fontSize: "17px", maxWidth: "700px", margin: "auto" }}>
          Dress Shop started with a simple idea: to bring elegant and fashionable
          dresses to customers at the best prices. From casual wear to party
          collections, we design outfits that match every occasion.
        </p>
      </div>

      
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ fontSize: "26px" }}>Our Mission</h3>
        <p style={{ fontSize: "17px", maxWidth: "700px", margin: "auto" }}>
          Our mission is to provide high-quality dresses with unique designs,
          ensuring every customer feels confident and beautiful.
        </p>
      </div>

     
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ fontSize: "26px" }}>Why Choose Us?</h3>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            fontSize: "17px",
          }}
        >
          <li>✨ Trendy & Stylish Collections</li>
          <li>👗 Dresses for Every Occasion</li>
          <li>💰 Affordable Prices</li>
          <li>🚚 Fast Delivery & Easy Returns</li>
          <li>❤️ Customer Satisfaction Guaranteed</li>
        </ul>
      </div>

      
      <p style={{ marginTop: "50px", fontSize: "18px" }}>
        Thank you for choosing <b>Dress Shop</b>. Stay fashionable with us!
      </p>

    </div>
  );
}

export default About;
