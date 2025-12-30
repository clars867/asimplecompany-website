"use client";
import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

const links = [
  { href: "/about", label: "ABOUT" },
  { href: "/research", label: "RESEARCH" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/partnership-portal", label: "PARTNERSHIP PORTAL" },
  { href: "/contact", label: "CONTACT" },
  { href: "/careers", label: "CAREERS" },
];

export default function NavBar() {
  return (
    <header className={styles.navHeader}>
      <div className={styles.navContainer}>

        <Link href="/" className={styles.brand}>
          A SIMPLE COMPANY
        </Link>

        <nav className={styles.navLinks}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLinkItem}>
              {link.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}