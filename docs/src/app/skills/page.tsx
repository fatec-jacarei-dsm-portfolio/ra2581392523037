import { SiteHeader } from "@/src/components/SiteHeader";
import styles from "./page.module.css";

const stack = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive design",
      "Accessibility",
      "Design systems",
      "API integration",
    ],
  },
  {
    category: "Backend",
    items: [
      "Go",
      "Python",
      "TypeScript",
      "Java",
      "C#",
      "REST APIs",
      "Microservices",
      "Authentication and authorization",
      "Message queues",
      "ETL pipelines",
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "CI/CD pipelines",
      "Cloud architecture",
      "Environment configuration",
      "Monitoring and observability",
    ],
  },
  {
    category: "Software Engineering",
    items: [
      "Clean Architecture",
      "Domain-driven design",
      "CQRS",
      "System design",
      "Scalable applications",
      "Integration patterns",
      "Automated testing",
      "Code quality",
      "Technical documentation",
    ],
  },
];

function chunkBySize(items: string[], size: number) {
  const chunks: string[][] = [];

  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }

  return chunks;
}

export default function SkillsPage() {
  return (
    <main className={styles.page}>
      <SiteHeader styles={styles} />

      <section className={styles.section}>
        <div className={styles.content}>
          <h1>Skill-Set</h1>
          <p>Main technical strengths grouped by domain.</p>
        </div>

        <div className={styles.groups}>
          {stack.map((group) => (
            <article key={group.category} className={styles.groupCard}>
              <h2>{group.category}</h2>

              <div className={styles.columns}>
                {chunkBySize(group.items, 5).map((column, columnIndex) => (
                  <ul
                    key={`${group.category}-col-${columnIndex}`}
                    className={styles.list}
                  >
                    {column.map((item) => (
                      <li key={`${group.category}-${item}`}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
