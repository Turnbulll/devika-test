import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

const Hero = (): JSX.Element => (
  <div className={styles.hero}>
    <div className={styles.content}>
      <h1>Unleash the Power of GIFs with Giphynator</h1>
      <p>
        Instantly search millions of trending GIFs powered by GIPHY’s Search API. Whether you're feeling funny, flirty, or just want to react — Giphynator has the perfect GIF for every moment.
      </p>
      <Link to="/search">Search now</Link>
    </div>
    <div className={styles.image}>
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzVoMzE3aG1pczc2bnNpd2dvbTZ2aHBra2xkM3N5d2l1bXo4ZGdpZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26n6WywJyh39n1pBu/giphy.gif" alt="Searching wiley coyote from looney toons" />
    </div>
  </div>
);

export default Hero;
