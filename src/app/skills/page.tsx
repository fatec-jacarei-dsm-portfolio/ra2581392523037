import { SiteHeader } from "@/src/components/SiteHeader";
import styles from "./page.module.css";

const stack = [
  "React and Next.js",
  "TypeScript and architecture",
  "Responsive design",
  "Accessibility",
  "Design systems",
  "API integration",
];

export default function SkillsPage() {
  return (
    <main className={styles.page}>
      <SiteHeader styles={styles} />

      <section className={styles.section}>
        <h1>Skill-Set</h1>
        <p>Separated page with the main technical strengths.</p>

        <ul className={styles.list}>
          {stack.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
