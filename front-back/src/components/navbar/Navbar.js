import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <span>
        <Link to="/" className="link" id="logo">
          kid'Store
        </Link>
      </span>
      <div className="links">
         
        <Link to="/" className="link">Home</Link>
        <Link to="/collection" className="link">shop collection</Link>
        <Link to="/story" className="link">Our Story</Link>
        <Link to="contact" className="link">Contact</Link>
        <Link to="/SignIn" className="link">Sign in</Link>
        <Link to="/SignUp" className="link">Sign up</Link>
      </div>
    </div>
  );
};

export default Navbar;