import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Layout.module.css';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainArea}>
        {/* Sidebar for workflow steps */}
        <aside className={styles.sidebar}>
          <h3>Workflow Steps</h3>
          <ul>
            <li>Start</li>
            <li>Action</li>
            <li>Condition</li>
            <li>End</li>
          </ul>
        </aside>

        {/* Main content */}
        <main className={styles.content}>{children}</main>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>FluxChat &copy; 2025 | Built by Vyshnavi Achi</p>
      </footer>
    </div>
  );
}
