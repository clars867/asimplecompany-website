"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingControls.module.css";
import NoticeBubble from "../NoticeBubble/NoticeBubble";
import CookieIcon from "../CookieConsent/CookieIcon";
import CookiePanel from "../CookieConsent/CookiePanel";

export default function FloatingControls() {
  const [cookiePanelOpen, setCookiePanelOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setCookiePanelOpen(true);
    }
  }, []);

  return (
    <div className={styles.wrapper} aria-label="Floating site controls">
      <div className={styles.stack}>
        {/* Site status / help */}
        <NoticeBubble />

        {/* Cookie consent status */}
        <div style={{ position: "relative" }}>
          <CookieIcon
            onClick={() => setCookiePanelOpen((open) => !open)}
          />

          <CookiePanel
            open={cookiePanelOpen}
            onClose={() => setCookiePanelOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}