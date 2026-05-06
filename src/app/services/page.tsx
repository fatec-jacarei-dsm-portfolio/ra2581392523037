import { SiteHeader } from "@/src/components/SiteHeader";
import styles from "./page.module.css";

const services = [
  "Git Version Control",
  "App Design",
  "Back-end Development",
  "Web Development",
  "Photography",
  "Freelancing",
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <SiteHeader styles={styles} />

      <section className={styles.section}>
        <h1>Services</h1>
        <p>One focused page for what I can build and deliver.</p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article key={service} className={styles.card}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{service}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
