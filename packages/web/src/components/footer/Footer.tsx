import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => (
  <div className={styles.footer}>
    <div className={styles.column}>
      <img src="/logo-white.svg" alt="logo" />
      <div className={styles.links}>
        <Link to="/serach">Search</Link>
        <Link to="/about">About</Link>
      </div>
      <div className={styles.address}>
        Business Address
        <br />
        P. Sherman, 42 Wallaby Way, Sydney
        <br />
        (678) 999-8212
      </div>
    </div>
  </div>
);

export default Footer;
