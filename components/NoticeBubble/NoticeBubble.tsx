"use client";

import { useState } from "react";
import styles from "./NoticeBubble.module.css";

export default function NoticeBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* Question mark icon */}
      <button
        className={styles.icon}
        onClick={() => setOpen(!open)}
        aria-label="Site notice"
      >
        ?
      </button>

      {/* Expanded message */}
      {open && (
        <div className={styles.panel}>
          <strong>This website is under construction.</strong>
          <p>Stay tuned for updates!</p>
        </div>
      )}
    </div>
  );
}
