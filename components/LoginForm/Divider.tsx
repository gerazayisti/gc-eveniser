import React from 'react';
import styles from './Divider.module.css';

export const Divider: React.FC = () => {
  return (
    <div className={styles.divider}>
      <div className={styles.line}></div>
      <span className={styles.text}>OR</span>
      <div className={styles.line}></div>
    </div>
  );
};