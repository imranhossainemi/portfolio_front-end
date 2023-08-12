import React from 'react';
import styles from '../Styles/Myself.module.css';

const Myself = () => (
  <div className={styles.aboutArticle}>
    <h2>About me</h2>
    <p>
      I can help you build a product ,
      feature or website Look through
      some of my work and experience!
      If you like what you see and have a
      project you need coded,
      don’t hestiate to contact me.
    </p>
    <button className="btm" type="button">
      get my resume
    </button>
  </div>
);

export default Myself;
