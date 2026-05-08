import { SiteHeader } from "@/src/components/SiteHeader";
import { PageVisual } from "@/src/components/PageVisual";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <SiteHeader styles={styles} />

      <section className={styles.section}>
        <div className={styles.content}>
          <h1>About Me</h1>

          <p>
            I am a Software Engineer focused on building scalable systems,
            reliable integrations, and complete digital solutions across
            backend, frontend, databases, cloud, and software architecture.
          </p>

          <div className={styles.timeline}>
            <article>
              <h2>Backend</h2>
              <p>
                Development of APIs, CRUD operations, queues, scheduled jobs,
                ETL pipelines, service orchestration, and CQRS-based solutions.
              </p>
            </article>

            <article>
              <h2>Frontend</h2>
              <p>
                Construction, maintenance, and integration of user interfaces
                with backend services, focusing on usability, consistency, and
                clean component structure.
              </p>
            </article>

            <article>
              <h2>Database</h2>
              <p>
                Database modeling, SQL and PL/SQL development, queries,
                maintenance routines, performance analysis, and DBA-related
                activities.
              </p>
            </article>

            <article>
              <h2>Architecture</h2>
              <p>
                Design of software architectures, technical documentation,
                infrastructure planning, cost estimation, and scalable system
                design.
              </p>
            </article>

            <article>
              <h2>DevOps & Cloud</h2>
              <p>
                Infrastructure automation with Terraform, cloud deployments,
                CI/CD pipelines, and solutions using AWS, Azure, and GCP.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
