import React from 'react';
import { Link } from 'react-router-dom';

const HeaderForUserLayout = () => {
  return (
    <header>
      <div className="logo">
        <h1>My App</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderForUserLayout;
