import React from 'react';
import styles from './Footer.module.scss';

const Loader: React.FC<{ count: number }> = ({ count }) => {
  return <span className={styles.footer}>Characters: {count}</span>;
};

export default Loader;
