"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./CookiePanel.module.css";

type CookieConsentState = "unknown" | "accepted" | "declined";

interface CookiePanelProps {
  open: boolean;
  onClose: () => void;
}

export default function CookiePanel({ open, onClose }: CookiePanelProps) {
  const [consent, setConsent] = useState<CookieConsentState>("unknown");

  const loadAnalytics = () => {
    if (typeof window === "undefined") return;

    if ((window as any).__analyticsLoaded) return;

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-REW2WYW95H";
    script.async = true;
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(){(window as any).dataLayer.push(arguments);}
    (window as any).gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX"); // ← replace with your GA ID

    (window as any).__analyticsLoaded = true;
  };

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");

    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }

    if (stored === "accepted") {
      loadAnalytics();
    }
  }, []);

  // Auto-open logic is handled by parent; this component just renders
  if (!open) return null;

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");

    loadAnalytics();

    window.gtag?.("consent", "update", {
      analytics_storage: "granted",
    });

    setConsent("accepted");
    onClose();
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");

    window.gtag?.("consent", "update", {
      analytics_storage: "denied",
    });

    setConsent("declined");
    onClose();
  };

  return (
    <div className={styles.panel}>
      <div className={styles.title}>Cookie preferences</div>

      <p className={styles.text}>
        We use cookies to understand how visitors interact with the site.
        Analytics are only enabled with your consent.{" "}
        <Link href="/privacy" className={styles.privacyLink}>
          View our privacy policy
        </Link>.
      </p>

      <div className={styles.actions}>
        <button onClick={acceptCookies}>Accept</button>
        <button onClick={declineCookies}>Decline</button>
      </div>
    </div>
  );
}