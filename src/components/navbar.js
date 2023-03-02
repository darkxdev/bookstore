import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h1>Bookstore CMS</h1>
    <ul>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
    <button type="button" className="icon-button">
      <span className="material-icons">person</span>
    </button>
  </div>
);

export default Navbar;
