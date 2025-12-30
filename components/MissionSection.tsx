

import styles from "./MissionSection.module.css";

export default function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionGrid}>
        {/* Left column */}
        <div className={styles.missionLeft}>
          <h2>
            OUR
            <br />
            MISSION
          </h2>
        </div>

        {/* Right column */}
        <div className={styles.missionRight}>
          <p>
            A Simple Company is a systems research and development firm focused on
            understanding and improving how information flows through people,
            machines, and organizations.
          </p>

          <p>
            We use artificial intelligence, forensic data analysis, advanced
            modeling, and simulation to translate complex data into structured
            insight. From that understanding, we design and build data
            architectures that give organizations clear evidence to support
            intelligent decisions.
          </p>

          <div className={styles.links}>
            <a href="/capabilities">Capability Statement →</a>
            <a href="/accreditation">Accreditation →</a>
          </div>
        </div>
      </div>
    </section>
  );
}