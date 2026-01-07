import styles from "./Aftercare.module.css";

export default function Aftercare() {
  return (
    <section id="aftercare" className={styles.aftercare}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Aftercare</p>
          <h2 className={styles.title}>Taking care of your tattoo</h2>
          <p className={styles.sub}>
            Proper aftercare is essential for healing and long-term quality.
            Follow these steps closely.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>First 24 hours</h3>
            <ul>
              <li>Keep the bandage on for 2–4 hours</li>
              <li>Wash gently with fragrance-free soap</li>
              <li>Pat dry — do not rub</li>
              <li>Apply a thin layer of recommended ointment</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Days 2–14</h3>
            <ul>
              <li>Wash 2–3 times daily</li>
              <li>Switch to unscented lotion</li>
              <li>Do not scratch or pick</li>
              <li>Avoid tight clothing</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>What to avoid</h3>
            <ul>
              <li>No swimming or soaking</li>
              <li>No direct sun exposure</li>
              <li>No heavy sweating</li>
              <li>No petroleum products</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Long-term care</h3>
            <ul>
              <li>Moisturize regularly</li>
              <li>Always use sunscreen</li>
              <li>Stay hydrated</li>
              <li>Message me with any concerns</li>
            </ul>
          </div>
        </div>

        <div className={styles.note}>
          Healing varies by person and placement. If anything feels off, reach
          out — I’m happy to help.
        </div>
      </div>
    </section>
  );
}