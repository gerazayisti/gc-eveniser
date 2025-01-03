import React from 'react';
import styles from './SocialLoginButtons.module.css';

export const SocialLoginButtons: React.FC = () => {
  return (
    <div className={styles.socialButtons}>
      <button className={styles.socialButton}>
        <img src="/google-icon.svg" alt="Google" />
      </button>
      <button className={styles.socialButton}>
        <img src="/facebook-icon.svg" alt="Facebook" />
      </button>
      <button className={styles.socialButton}>
        <img src="/github-icon.svg" alt="GitHub" />
      </button>
      <button className={styles.socialButton}>
        <img src="/x-icon.svg" alt="X" />
      </button>
    </div>
  );
};