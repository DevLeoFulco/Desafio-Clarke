import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.homeTitle}>Economize até 40% na conta de luz da sua empresa sem precisar investir</h1>
    </div>
  );
};

export default Home;
