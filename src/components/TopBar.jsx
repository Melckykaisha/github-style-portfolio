import React from 'react';
import styles from './TopBar.module.css';
import { Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function TopBar({ onToggleSidebar, title = 'Dashboard' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <button className={styles.menuBtn} onClick={onToggleSidebar}>
          <Menu size={20} />
        </button>
        <div className={styles.logo}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="Logo"
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>{title}</span>
        </div>
      </div>

      <div className={styles.center}>
        <input type="text" placeholder="Search..." className={styles.search} />
      </div>

      <div className={styles.right}>
  <button className={styles.themeToggle} onClick={toggleTheme}>
    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
  </button>
  
  <span className={styles.link}>Docs</span>
  <span className={styles.link}>Blog</span>

  <Link to="/profile" className={styles.avatarLink}>
    <div className={styles.avatar}>MK</div>
  </Link>
</div>

    </header>
  );
}
