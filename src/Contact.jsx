import React from 'react';
import styles from './Contact.module.css';
import TopBar from './components/TopBar';

export default function Contact() {
  return (
    <>
      <TopBar title="Contact" />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.header}>Contact</h1>
          <form className={styles.form}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>

            <label>
              Message
              <textarea name="message" rows="5" placeholder="Your message..." required></textarea>
            </label>

            <button type="submit">Send Message</button>
          </form>
        </main>
      </div>
    </>
  );
}
