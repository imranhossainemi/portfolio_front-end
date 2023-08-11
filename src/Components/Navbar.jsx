import React from 'react';
import styles from '../Styles/Navbar.module.css';

const Navbar = () => (
  <nav>
    <button className={styles.mobileNavBtm} id="open" type="button">  </button>
    <ul className={styles.navigation}>
      <li className={styles.navItem}>
        <a href="#portfolio" className={styles.navLink}>Portfolio</a>
      </li>
      <li className={styles.navItem}>
        <a href="#about" className={styles.navLink}>About</a>
      </li>
      <li className={styles.navItem}>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
