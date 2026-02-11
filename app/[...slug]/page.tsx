import styles from "./UnderConstruction.module.css";

export const metadata = {
  title: "Under Construction | A Simple Company",
  description:
    "This page is under construction. Please check back for updates.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UnderConstructionPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>This Page Is Under Construction</h1>
      <p className={styles.text}>
        We’re actively building this section of the site.
      </p>
      <p className={styles.meta}>
        Last updated: February 11, 2026
      </p>
    </main>
  );
}