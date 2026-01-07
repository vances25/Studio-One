import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.kicker}>
            <span className={styles.dot} aria-hidden="true" />
            Tattoo • Studio • Portfolio
          </div>

          <h1 className={styles.title}>
            Ink that feels <span className={styles.accent}>like you</span>.
          </h1>

          <p className={styles.sub}>
            A clean, modern portfolio for tattoo artists — built to show your work,
            take bookings, and answer the questions clients always ask.
          </p>

          <div className={styles.ctaRow}>
            <a href="#booking" className={styles.primaryBtn}>
              Book Now
            </a>
            <a href="#work" className={styles.secondaryBtn}>
              View Work
            </a>
          </div>

          <div className={styles.metaRow}>
            <div className={styles.metaPill}>
              <span className={styles.metaLabel}>Hours</span>
              <span className={styles.metaValue}>Tue–Sat · 12–8</span>
            </div>
            <div className={styles.metaPill}>
              <span className={styles.metaLabel}>Location</span>
              <span className={styles.metaValue}>Minneapolis, MN</span>
            </div>
            <div className={styles.metaPill}>
              <span className={styles.metaLabel}>Response</span>
              <span className={styles.metaValue}>24–48h</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageCard}>
            <Image
              src="/me.jpg"
              alt="Artist portrait"
              width={1400}
              height={1750}
              priority
              className={styles.image}
              sizes="(max-width: 900px) 92vw, 520px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}