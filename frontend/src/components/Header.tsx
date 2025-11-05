import React from 'react';
import styles from './Header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <h1>FluxChat</h1>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>Home</a>
        <a href="#" className={styles.navLink}>Workflows</a>
        <a href="#" className={styles.navLink}>Templates</a>
        <a href="#" className={styles.navLink}>Settings</a>
      </nav>

      {/* User Profile */}
      <div className={styles.user}>
        <div className={styles.avatar}>VA</div>
      </div>
    </header>
  );
}
