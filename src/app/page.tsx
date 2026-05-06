import Link from "next/link";
import { SiteHeader } from "@/src/components/SiteHeader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <SiteHeader styles={styles} />

      <section className={styles.hero}>
        <div>
          <h1 className={styles.title}>
            Hello, I&apos;m <span className={styles.name}>Victor Ramos</span>,
            <br />a Software Engineer
          </h1>
          <p className={styles.subtitle}>
            Software engineering specialist with strong experience in backend development, systems architecture, integrations, and building scalable solutions.
          </p>
          <Link href="/portfolio" className={styles.cta}>
            Creator journey
          </Link>
        </div>

      </section>
    </main>
  );
}
