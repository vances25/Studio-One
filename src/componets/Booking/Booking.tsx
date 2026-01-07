import styles from "./Booking.module.css";

export default function Booking() {
  return (
    <section id="booking" className={styles.booking}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.kicker}>BOOKING</span>
          <h2 className={styles.title}>Request a tattoo</h2>
          <p className={styles.sub}>
            Fill this out and I’ll get back to you within 24–48 hours. Prefer to
            reach out directly? Use the options below.
          </p>
        </div>

        <div className={styles.layout}>
          <form className={styles.form}>
            <div className={styles.grid}>
              <input placeholder="Full name" />
              <input placeholder="Email address" />
              <input placeholder="Instagram (optional)" />
              <input placeholder="Preferred location on body" />
            </div>

            <div className={styles.row}>
              <select>
                <option>Style</option>
                <option>Fine line</option>
                <option>Blackwork</option>
                <option>Color</option>
                <option>Flash</option>
              </select>

              <select>
                <option>Approx size</option>
                <option>Small (1–3 in)</option>
                <option>Medium (4–6 in)</option>
                <option>Large (7+ in)</option>
              </select>

              <select>
                <option>Budget</option>
                <option>$100–200</option>
                <option>$200–400</option>
                <option>$400+</option>
              </select>
            </div>

            <textarea
              rows={5}
              placeholder="Describe your idea (reference links welcome)"
            />

            <div className={styles.footer}>
              <span className={styles.note}>
                Deposit required to confirm bookings.
              </span>
              <button type="submit" className={styles.submit}>
                Send request
              </button>
            </div>
          </form>

          <aside className={styles.contactCard}>
            <div className={styles.contactTop}>
              <div className={styles.contactKicker}>
                <span className={styles.contactDot} aria-hidden="true" />
                Other ways to book
              </div>
              <p className={styles.contactSub}>
                If you have a quick question, reach out here.
              </p>
            </div>

            <div className={styles.contactList}>
              <a className={styles.contactItem} href="tel:+11234567890">
                <span className={styles.contactLabel}>Phone</span>
                <span className={styles.contactValue}>(123) 456-7890</span>
              </a>

              <a className={styles.contactItem} href="mailto:hello@studioone.com">
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>hello@studioone.com</span>
              </a>

              <a className={styles.contactItem} href="#">
                <span className={styles.contactLabel}>Instagram</span>
                <span className={styles.contactValue}>@studioone</span>
              </a>
            </div>

            <div className={styles.contactNote}>
              Please include placement, size, and a reference if possible.
            </div>

            <a className={styles.contactCta} href="#work">
              View work first
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}