import React from 'react';
import Container from 'react-bootstrap/Container';
import SocialMedia from './SocialMedia';
import styles from '../Styles/Banner.module.css';

const Banner = () => (
  <Container>
    <section className={styles.banner}>
      <div className={styles.headline}>
        <h1>
          Hey there. I am Imran Hossain
          {' '}
          <br />
          <span>I am a software developer</span>
        </h1>
      </div>
      <div className={styles.article}>
        <p>
          I can help you build a product ,
          feature or website Look through
          some of my work and experience!
          If you like what you see
          and have a project you need coded,
          do not hestiate to contact me.
        </p>
      </div>
      <SocialMedia />
    </section>
  </Container>
);

export default Banner;
