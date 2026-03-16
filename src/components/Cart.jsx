import React, { useEffect, useState } from "react";

function Cart({ cart, removeFromCart }) {
  const [total, setTotal] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 1500);
  };

  return (
    <>
     
      <div className="cart-container">
        <h2>Your Cart</h2>

        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(item.id)}
              disabled={loading}
            >
              Remove
            </button>
          </div>
        ))}

        <h2>Total Amount Rs: {total}</h2>

        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={loading || cart.length === 0}
        >
          {loading ? "Placing Order..." : "Buy Now"}
        </button>
      </div>

      {showSuccess && (
        <div className="success-overlay">
          <div className="success-box">
            <div className="tick">✔</div>
            <h1>Order Placed!</h1>
            <p>Thank you for shopping with us</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
