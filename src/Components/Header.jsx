import React from 'react';
import Navigation from './Navigation';
import styles from '../Styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Navigation />
  </header>
);

export default Header;
