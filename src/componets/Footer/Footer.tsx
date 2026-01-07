import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>Studio One</div>
            <p className={styles.tagline}>
              Custom tattoos • Minneapolis, MN
            </p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <p className={styles.colTitle}>Explore</p>
              <a href="#work">Work</a>
              <a href="#pricing">Pricing</a>
              <a href="#booking">Booking</a>
              <a href="#aftercare">Aftercare</a>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>Contact</p>
              <a href="mailto:hello@studioone.com">hello@studioone.com</a>
              <a href="#">Instagram</a>
              <a href="#">Location</a>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>Info</p>
              <span>Tue–Sat · 12–8</span>
              <span>Deposit required</span>
              <span>By appointment only</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Studio One</span>
          <span className={styles.sep}>•</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}