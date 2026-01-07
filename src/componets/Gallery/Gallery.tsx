"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

type Tag = "All" | "Fine line" | "Blackwork" | "Color" | "Flash";

type Item = {
  src: string;
  alt: string;
  tag: Exclude<Tag, "All">;
};

const TAGS: Tag[] = ["All", "Fine line", "Blackwork", "Color", "Flash"];

const ITEMS: Item[] = [
  { src: "/gallery/1.jpg", alt: "Tattoo 1", tag: "Fine line" },
  { src: "/gallery/2.jpg", alt: "Tattoo 2", tag: "Blackwork" },
  { src: "/gallery/3.jpg", alt: "Tattoo 3", tag: "Color" },
  { src: "/gallery/4.jpg", alt: "Tattoo 4", tag: "Flash" },
  { src: "/gallery/5.jpg", alt: "Tattoo 5", tag: "Fine line" },
  { src: "/gallery/6.jpg", alt: "Tattoo 6", tag: "Blackwork" },
  { src: "/gallery/7.jpg", alt: "Tattoo 7", tag: "Color" },
  { src: "/gallery/8.jpg", alt: "Tattoo 8", tag: "Flash" },
  { src: "/gallery/9.jpg", alt: "Tattoo 9", tag: "Fine line" },
];

const DEFAULT_COUNT = 6;

export default function Gallery() {
  const [active, setActive] = useState<Tag>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    if (active === "All") return ITEMS;
    return ITEMS.filter((x) => x.tag === active);
  }, [active]);

  const visible = useMemo(() => {
    return showAll ? filtered : filtered.slice(0, DEFAULT_COUNT);
  }, [filtered, showAll]);

  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <p className={styles.kicker}>Work</p>
            <h2 className={styles.title}>Latest pieces</h2>
            <p className={styles.sub}>
              A mix of healed, fresh, and flash. Tap to explore styles.
            </p>
          </div>

          <div className={styles.filters} role="tablist">
            {TAGS.map((t) => (
              <button
                key={t}
                type="button"
                className={`${styles.chip} ${
                  active === t ? styles.active : ""
                }`}
                onClick={() => {
                  setActive(t);
                  setShowAll(false);
                }}
                aria-pressed={active === t}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {visible.map((item) => (
            <article key={item.src} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={styles.img}
                  sizes="(max-width: 900px) 45vw, 280px"
                />
              </div>
              <div className={styles.meta}>
                <span className={styles.tag}>{item.tag}</span>
              </div>
            </article>
          ))}
        </div>

        {filtered.length > DEFAULT_COUNT && (
          <div className={styles.moreRow}>
            <button
              type="button"
              className={styles.moreBtn}
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? "Show less" : `View all (${filtered.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}