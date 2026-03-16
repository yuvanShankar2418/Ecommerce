import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#fce4ec", 
        minHeight: "100vh",
        padding: "60px",
        textAlign: "center",
      }}
    >
      
      <h2 style={{ fontSize: "40px", marginBottom: "20px", color: "#880e4f" }}>
        Welcome to Our Dress Shop!
      </h2>

    
      <p style={{ fontSize: "18px", maxWidth: "750px", margin: "auto" }}>
        Discover the latest trends in fashion with our beautiful collection of
        stylish dresses. We provide outfits for every occasion — casual wear,
        party wear, and traditional dresses.
      </p>

     
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ fontSize: "28px", color: "#ad1457" }}>
          🎉 Festival Special Discounts 🎉
        </h3>

        <p style={{ fontSize: "18px" }}>
          We are offering amazing discounts for:
        </p>

        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            fontSize: "18px",
            marginTop: "15px",
          }}
        >
          <li>🎄 Christmas Sale - Up to 50% OFF</li>
          <li>🎆 New Year Offers - Buy 1 Get 1 Free</li>
          <li>🌾 Pongal Special - Flat 30% Discount</li>
        </ul>
      </div>

  
      <div style={{ marginTop: "50px" }}>
        <h3 style={{ fontSize: "28px", color: "#6a1b9a" }}>
          Our Collections
        </h3>

        <p style={{ fontSize: "18px" }}>
          Explore our wide range of dresses:
        </p>

        <div style={{ fontSize: "18px", marginTop: "15px" }}>
          👗 Party Wear | 👚 Casual Wear | 🥻 Traditional Wear | 💃 Western Wear
        </div>
      </div>

  
      <div style={{ marginTop: "50px" }}>
        <button  onClick={() => navigate("/products")}
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            backgroundColor: "#880e4f",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>

    
      <p style={{ marginTop: "40px", fontSize: "18px" }}>
        Visit us today and enjoy the best festive fashion deals! ❤️
      </p>
    </div>
  );
}

export default Home;
