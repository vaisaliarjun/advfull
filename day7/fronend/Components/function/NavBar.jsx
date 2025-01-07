import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/useref">UseRef</Link></li>
        <li><Link to="/usecontext">UseContext</Link></li>
        <li><Link to="/useMemo">UseMemo</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">LoginPage</Link></li>
        <li><Link to="/signup">SignupPage</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
