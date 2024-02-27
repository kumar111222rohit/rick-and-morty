import React from 'react';
import styles from './Loader.module.scss'; // Import as a module
import useStore from '../../hooks/useStore';

const Loader: React.FC = () => {
  const { showLoader } = useStore();
  
  if (!showLoader) {
    return null;
  }

  return (
    <div className={`${styles.busyHolder} backdrop`} style={{ display: 'block' }}>
      <div className={styles.busy}>
        <div className={styles.loadingText}></div>
        <div className={styles.loader}></div>
        <div className={styles.loadingText}>Please wait...</div>
      </div>
    </div>
  );
};

export default Loader;
