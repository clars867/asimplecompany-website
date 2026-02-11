"use client";
import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

const links = [
  { 
    href: "/about", 
    label: "ABOUT",
    children: [
      { href: "/about/capabilities", label: "WHAT WE DO" },
      { href: "/about/clients", label: "WHO WE SERVE" },
      { href: "/about/field-work", label: "FIELD WORK" },
      { href: "/about/gov-con", label: "GOVERNMENT CONTRACTING" },
    ],
  },
  {
    href: "/research",
    label: "RESEARCH",
    children: [
      { href: "/research/soulos", label: "SOUL OS" },
      { href: "/research/inudstrial-hazard", label: "INDUSTRIAL HAZARD ANALYSIS" },
      { href: "/research/water-analysis", label: "WATER RESOURCE ANALYSIS" },
    ],
  },
  { 
    href: "/projects", 
    label: "PROJECTS",
    children: [
      { href: "/projects/simulation-modeling", label: "SIMULATION & MODELING" },
      { href: "/projects/policy", label: "POLICY & COMPLIANCE" },
      { href: "/projects/artificial-intelligence", label: "ARTIFICIAL INTELLIGENCE" },
      { href: "/projects/cyber-forensics", label: "CLOUD INFRASTRUCTURE" },
      { href: "/projects/data-analytics", label: "APPLIED DATA ANALYTICS" },
    ],
  },
  { 
    href: "/get-connected", 
    label: "GET CONNETED",
    children: [
      { href: "/get-connected/contact", label: "CONTACT US" },
      { href: "/get-connected/careers", label: "CAREERS" },
      { href: "/get-connected/gov-connect", label: "PARTNERSHIP INQUIRY" },
      { href: "/get-connected/consultation", label: "FREE CONSULTATION" },
      { href: "/get-connected/referral-network", label: "REFERRAL NETWORK" }, 
    ],
  },
  { 
    href: "/knowledge-center", 
    label: "KNOWLEDGE CENTER",
    children: [
      { href: "/knowledge-center/software-catalog", label: "SOFTWARE CATALOG" },
      { href: "/knowledge-center/codes-standards", label: "CODES & STANDARDS" },
      { href: "/knowledge-center/government-resources", label: "GOVERNMENT RESOURCES" },
    ],
  },
  { 
    href: "/partnership-portal", 
    label: "PARTNERSHIP PORTAL",
    children: [
      { href: "/partnership-portal/login", label: "LOGIN / SIGN UP" },
    ],
  },
];

export default function NavBar() {
  return (
    <header className={styles.navHeader}>
      <div className={styles.navContainer}>

        <Link href="/" className={styles.brand}>
          A SIMPLE COMPANY
        </Link>

        <nav className={styles.navLinks}>
          {links.map((link) => {
            if (link.children) {
              return (
                <div key={link.label} className={styles.dropdown}>
                  <Link
                    href={link.href}
                    className={`${styles.navLinkItem} ${styles.dropdownToggle}`}
                  >
                    <span>{link.label}</span>
                    <span className={styles.materialIcon}>arrow_drop_down</span>
                  </Link>
                  <div className={styles.dropdownMenu}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.dropdownItem}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={link.href} href={link.href} className={styles.navLinkItem}>
                {link.label}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}