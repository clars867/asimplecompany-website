"use client";

import { useEffect, useState } from "react";
import styles from "./CookieIcon.module.css";

type CookieConsentState = "unknown" | "accepted" | "declined";

type CookieIconProps = {
  onClick?: () => void;
  className?: string;
};

export default function CookieIcon({ onClick, className }: CookieIconProps) {
  const [consent, setConsent] = useState<CookieConsentState>("unknown");

  useEffect(() => {
    const readConsent = () => {
      const stored = localStorage.getItem("cookie-consent");
      if (stored === "accepted" || stored === "declined") {
        setConsent(stored);
      } else {
        setConsent("unknown");
      }
    };

    // Initial read
    readConsent();

    // Listen for updates from CookiePanel
    window.addEventListener("cookie-consent-changed", readConsent);

    return () => {
      window.removeEventListener("cookie-consent-changed", readConsent);
    };
  }, []);

  const iconSrc =
    consent === "declined"
      ? "/icons/cookies/cookie-off.svg"
      : "/icons/cookies/cookie-on.svg";

  const label =
    consent === "accepted"
      ? "Cookies enabled"
      : consent === "declined"
      ? "Cookies disabled"
      : "Cookie preferences";

  const iconColor =
    consent === "accepted"
      ? "#3fb950" // green
      : consent === "declined"
      ? "#f85149" // red
      : "rgba(242,241,235,0.8)";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`${styles.iconButton} ${className ?? ""}`}
      style={{ color: iconColor }}
      onClick={onClick}
    >
      <img
        src={iconSrc}
        alt={label}
        className={styles.icon}
      />
    </button>
  );
}