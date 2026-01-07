// src/componets/Pricing/Pricing.tsx
import styles from "./Pricing.module.css";

type Tier = {
  title: string;
  price: string;
  desc: string;
  bullets: string[];
  badge?: string;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    title: "Small",
    price: "$120+",
    desc: "Simple pieces, minimal detail.",
    bullets: ["1–3 inches", "Fine line / small flash", "Great for first tattoos"],
  },
  {
    title: "Medium",
    price: "$250+",
    desc: "Most common size range.",
    bullets: ["4–6 inches", "More detail / shading", "Best value"],
    badge: "Most popular",
    featured: true,
  },
  {
    title: "Large",
    price: "$450+",
    desc: "Bigger concepts + time.",
    bullets: ["7+ inches", "High detail / color", "May require multiple sessions"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.header}>
            <span className={styles.kicker}>PRICING</span>
            <h2 className={styles.title}>Simple, transparent starting rates</h2>
            <p className={styles.sub}>
              Final pricing depends on placement, detail, and time. I’ll confirm an
              exact quote after you submit your request.
            </p>
          </div>

          <div className={styles.pill}>
            <div className={styles.pillItem}>
              <span className={styles.pillLabel}>Deposit</span>
              <span className={styles.pillValue}>Required to confirm</span>
            </div>
            <span className={styles.pillDot} aria-hidden="true" />
            <div className={styles.pillItem}>
              <span className={styles.pillLabel}>Response</span>
              <span className={styles.pillValue}>24–48 hours</span>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {TIERS.map((t) => (
            <div
              key={t.title}
              className={`${styles.card} ${t.featured ? styles.featured : ""}`}
            >
              <div className={styles.cardTop}>
                <div>
                  <div className={styles.cardTitleRow}>
                    <h3 className={styles.cardTitle}>{t.title}</h3>
                    {t.badge ? <span className={styles.badge}>{t.badge}</span> : null}
                  </div>
                  <p className={styles.cardDesc}>{t.desc}</p>
                </div>

                <div className={styles.price}>
                  <span className={styles.priceValue}>{t.price}</span>
                  <span className={styles.priceNote}>starting</span>
                </div>
              </div>

              <ul className={styles.list}>
                {t.bullets.map((b) => (
                  <li key={b} className={styles.listItem}>
                    <span className={styles.check} aria-hidden="true" />
                    <span className={styles.listText}>{b}</span>
                  </li>
                ))}
              </ul>

              <a href="#booking" className={styles.cta}>
                Request a tattoo
              </a>
            </div>
          ))}
        </div>

        <div className={styles.finePrint}>
          <p className={styles.fineLine}>
            * Touch-ups are handled case-by-case. Travel, cover-ups, and custom designs
            may affect pricing.
          </p>
        </div>
      </div>
    </section>
  );
}