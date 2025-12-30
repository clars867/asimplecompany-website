import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Left column */}
        <div className={styles.left}>
          <span className={styles.brand}>A SIMPLE COMPANY</span>
        </div>

        {/* Right column */}
        <div className={styles.right}>
          <p className={styles.heading}>FIND THE ANSWERS HERE…</p>

          <div className={styles.linksGrid}>
            <Link href="/projects">PROJECTS</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/testimonials">TESTIMONIALS</Link>
            <Link href="/projects">PROJECTS</Link>
            <Link href="/about">ABOUT US</Link>
            <Link href="/referral-network">REFERRAL NETWORK</Link>
            <Link href="https://github.com" target="_blank">
              GITHUB
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <Link href="/privacy">PRIVACY POLICY</Link>
        <Link href="/pgp">PGP PUBLIC KEY</Link>
        <a href="/sitemap.xml">SITEMAP</a>
      </div>
    </footer>
  );
}
