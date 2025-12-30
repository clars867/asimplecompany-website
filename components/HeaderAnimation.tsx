import styles from "./HeaderAnimation.module.css";

export default function HeaderAnimation() {
  return (
    <div className={styles.headerAnimation}>
      <video
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/animations/planet-earth-animation.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlayText}>
        <div>SYSTEMS RESEARCH</div>
        <div className={styles.overlayAmpersand}>&amp;</div>
        <div>DEVELOPMENT</div>
      </div>
    </div>
  );
}
