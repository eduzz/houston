import React from 'react';
import styles from './styles';

const Header = () => (
  <header style={styles.header}>
    <h1 style={styles.title}>Houston Design System</h1>
    <span style={styles.subtitle}>We <s>have a</s> solve problems!</span>

    <p style={styles.description}>O Houston é um conjunto de diretrizes, componentes e padrões para acelerar o design e o desenvolvimento de produto.</p>
  </header>
);

export default Header;