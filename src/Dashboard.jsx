import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import TopBar from './components/TopBar';
import { Home, Folder, FileText, Info, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <TopBar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} title="Dashboard" />
      <div className={styles.container}>
        {sidebarOpen && (
          <aside className={styles.sidebar}>
            <div className={styles.logo}>Melckzedek Kirya Kaisha</div>
            <nav className={styles.nav}>
              <SidebarItem icon={<Home size={20} />} label="Overview" />
              <SidebarItem icon={<Folder size={20} />} label="Projects" />
              <SidebarItem icon={<FileText size={20} />} label="Blog" />
              <SidebarItem icon={<Info size={20} />} label="Profile" to="/profile" />
              <SidebarItem icon={<Mail size={20} />} label="Contact" to="/contact" />
            </nav>
          </aside>
        )}

        <main className={styles.main}>
          <h1 className={styles.header}>Overview</h1>
          <div className={styles.cardGrid}>
            <ProjectCard title="Project One" description="Short description of the project." />
            <ProjectCard title="Project Two" description="Another project summary." />
          </div>
        </main>
      </div>
    </>
  );
}

function SidebarItem({ icon, label, to }) {
  const content = (
    <div className={styles.navItem}>
      {icon}
      <span>{label}</span>
    </div>
  );

  return to ? <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>{content}</Link> : content;
}


function ProjectCard({ title, description }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>View Project</button>
    </div>
  );
}
