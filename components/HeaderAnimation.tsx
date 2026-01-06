import styles from "./HeaderAnimation.module.css";

export default function HeaderAnimation() {
  return (
    <div className={styles.headerAnimation}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/animations/globe-poster.jpg"
      >
        <source src="/animations/globe.mp4" type="video/mp4" />
        Your browser does not support the HTML5 video tag.
      </video>
      <div className={styles.overlayText}>
        <div>SYSTEMS RESEARCH</div>
        <div className={styles.overlayAmpersand}>&amp;</div>
        <div>DEVELOPMENT</div>
      </div>
    </div>
  );
}
