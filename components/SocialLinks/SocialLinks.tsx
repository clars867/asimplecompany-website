"use client";

import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  return (
    <div className={styles.socialBar}>
      <div className={styles.socialContainer}>
        <div className={styles.socialRow}>
          <span className={styles.socialLabel}>Social Media</span>

          <nav className={styles.socialLinks} aria-label="Social media links">
            <a
              href="https://www.linkedin.com/company/a-simple-company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.linkText}>LinkedIn</span>
            </a>

            <a
              href="https://github.com/clars867"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.linkText}>GitHub</span>
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.linkText}>YouTube</span>
            </a>

            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.linkText}>TikTok</span>
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.linkText}>Instagram</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}