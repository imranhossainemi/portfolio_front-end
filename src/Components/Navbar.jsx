import React, { Link } from 'react';

const Navbar = () => (
  <nav>
    <button className="mobile-nav-btm" id="open" type="button">  </button>
    <ul className="navigation">
      <li className="nav-item">
        <Link to="#portfolio" className="nav-link">Portfolio</Link>
      </li>
      <li className="nav-item">
        <a href="#about" className="nav-link">About</a>
      </li>
      <li className="nav-item">
        <a href="#contact" className="nav-link">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
