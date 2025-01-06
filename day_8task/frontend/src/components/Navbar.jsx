
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Expense Splitter</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/about" className="navbar-item">About</Link>
        <Link to="/gallery" className="navbar-item">Gallery</Link>
        <Link to="/contact" className="navbar-item">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
