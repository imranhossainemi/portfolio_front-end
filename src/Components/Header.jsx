import React from 'react';
import Navbar from './Navbar';
import styles from '../Styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.navSec}>
      <div className={styles.logo}>
        <p>welcome</p>
      </div>
      <Navbar />
    </div>
  </header>
);

export default Header;
