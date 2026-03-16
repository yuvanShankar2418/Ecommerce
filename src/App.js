import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';
import Cart from './components/Cart.jsx';
import './Style.css';



function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  return (
    <>
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login setUser={setUser} />} />
        <Route path="/products" element={user ? <Products addToCart={addToCart} /> : <Navigate to="/" />} />
        <Route path="/contact" element={user ? <Contact /> : <Navigate to="/" />} />
        <Route path="/about" element={user ? <About /> : <Navigate to="/" />} />
        <Route path="/cart" element={user ? <Cart cart={cart} removeFromCart={removeFromCart} /> : <Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
