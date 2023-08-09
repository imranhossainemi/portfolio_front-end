import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = () => (
  <div className="socialMedia">
    <ul>
      <li>
        <a href="/#" target="_blank" rel="noopener" aria-label="github">
          <FontAwesomeIcon icon="fab fa-github" />
        </a>
      </li>
      <li>
        <a href="/#" target="_blank" rel="noopener" aria-label="twitter">
          <FontAwesomeIcon icon="fab fa-twitter" />
        </a>
      </li>
      <li>
        <a href="/#" target="_blank" rel="noopener" aria-label="linkedin">
          <FontAwesomeIcon icon="fab fa-linkedin-in" />
        </a>
      </li>
      <li>
        <a href="/#" target="_blank" rel="noopener" aria-label="wellfound">
          <FontAwesomeIcon icon="fab fa-angellist" />
        </a>
      </li>
      <li>
        <a href="/#" target="_blank" rel="noopener" aria-label="medium">
          <FontAwesomeIcon icon="fab fa-medium" />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialMedia;
