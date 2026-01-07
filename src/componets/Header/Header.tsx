import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      {/* Top nav */}
      <div className={styles.nav}>
        <a className={styles.brand} href="#">
          <span className={styles.brandMark} aria-hidden="true" />
          <span className={styles.brandText}>Studio One</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#booking">Booking</a>
          <a href="#aftercare">Aftercare</a>
        </nav>

        <div className={styles.actions}>
          <a className={styles.ghostBtn} href="#pricing">
            Pricing
          </a>
          <a className={styles.primaryBtn} href="#booking">
            Book a Consult
          </a>
        </div>
      </div>
    </header>
  );
}