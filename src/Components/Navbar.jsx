import React from 'react';

const Navbar = () => (
  <nav>
    <button className="mobile-nav-btm" id="open" type="button">  </button>
    <ul className="navigation">
      <li className="nav-item">
        <a href="/portfolio" className="nav-link">Portfolio</a>
      </li>
      <li className="nav-item">
        <a href="/about" className="nav-link">About</a>
      </li>
      <li className="nav-item">
        <a href="/contact" className="nav-link">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
