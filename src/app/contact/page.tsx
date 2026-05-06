import { SiteHeader } from "@/src/components/SiteHeader";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <SiteHeader styles={styles} />

      <section className={styles.section}>
        <h1>Connect with me</h1>
        <p>Dedicated page with smooth scroll and direct contact fields.</p>

        <form className={styles.form}>
          <label htmlFor="email" className={styles.srOnly}>Email</label>
          <input id="email" type="email" placeholder="Email" />

          <label htmlFor="message" className={styles.srOnly}>Message</label>
          <textarea id="message" rows={5} placeholder="Message" />

          <button type="submit">Stay Connected</button>
        </form>
      </section>
    </main>
  );
}
