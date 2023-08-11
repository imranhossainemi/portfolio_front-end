import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedinIn, faTwitter, faAngellist, faMedium,
} from '@fortawesome/free-brands-svg-icons';
import styles from '../Styles/SocialMedia.module.css';

const SocialMedia = () => (
  <div className={styles.socialMedia}>
    <ul>
      <li>
        <a href="/#" target="_blank" rel="noopener" aria-label="github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="/#" target="_blank" rel="noopener" aria-label="twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href="/#" target="_blank" rel="noopener" aria-label="linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href="/#" target="_blank" rel="noopener" aria-label="wellfound">
          <FontAwesomeIcon icon={faAngellist} />
        </a>
      </li>
      <li>
        <a href="/#" target="_blank" rel="noopener" aria-label="medium">
          <FontAwesomeIcon icon={faMedium} />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialMedia;
