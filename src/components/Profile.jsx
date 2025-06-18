import React, { useState } from 'react';
import TopBar from './TopBar';
import styles from './Profile.module.css';

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <TopBar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} title="Profile" />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.profileCard}>
            <img
              className={styles.avatar}
              src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
              alt="Profile"
            />
            <h2 className={styles.name}>Melckzedek Kirya Kaisha</h2>
            <p className={styles.title}>Frontend Developer | UI/UX Designer</p>
            <p className={styles.bio}>
              Passionate about building user-friendly interfaces, clean code, and modern web experiences.
            </p>
            <div className={styles.links}>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="mailto:you@example.com">Email</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
