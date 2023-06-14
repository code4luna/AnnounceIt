import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/carousel">Carousel</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/faq">FAQ</Link>
    </nav>
  );
}

export default Navbar;
