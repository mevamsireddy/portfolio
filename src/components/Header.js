import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add this line to import the CSS

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Vamsi Reddy</h1>
      </div>
      <nav className="header-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
