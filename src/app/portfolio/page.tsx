import { SiteHeader } from "@/src/components/SiteHeader";
import styles from "./page.module.css";

const projects = [
  {
    name: "Agency Landing",
    stack: "Next.js, TypeScript, CSS Modules",
  },
  {
    name: "SaaS Dashboard",
    stack: "React, Charts, API integration",
  },
  {
    name: "E-commerce UI",
    stack: "Design system, cart flow, responsiveness",
  },
];

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <SiteHeader styles={styles} />

      <section className={styles.section}>
        <h1>Portfolio</h1>
        <p>Projects in separate cards with scroll-ready layout.</p>

        <div className={styles.projects}>
          {projects.map((project) => (
            <article key={project.name} className={styles.card}>
              <h2>{project.name}</h2>
              <p>{project.stack}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
