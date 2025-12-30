import Link from "next/link";
import styles from "./PillButton.module.css";

type PillButtonProps = {
  href: string;
  label: string;
};

export default function PillButton({ href, label }: PillButtonProps) {
  return (
    <Link href={href} className={styles.pill}>
      <span className={styles.label}>{label}</span>
      <span className={styles.arrow}>↗</span>
    </Link>
  );
}