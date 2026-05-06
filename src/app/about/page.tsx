import { SiteHeader } from "@/src/components/SiteHeader";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <SiteHeader styles={styles} />

      <section className={styles.section}>
        <h1>About Me</h1>
        <p>
          I build digital products with attention to rhythm, contrast, and
          clean interactions. I like projects that balance aesthetics and
          maintainability.
        </p>

        <div className={styles.timeline}>
          <article>
            <h2>2022</h2>
            <p>Started building interfaces professionally.</p>
          </article>
          <article>
            <h2>2024</h2>
            <p>Focused on design systems and component architecture.</p>
          </article>
          <article>
            <h2>2026</h2>
            <p>Delivering multi-page portfolios and premium landing pages.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
