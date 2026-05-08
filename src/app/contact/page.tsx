import { SiteHeader } from "@/src/components/SiteHeader";
import { ContactForm } from "@/src/components/ContactForm";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./page.module.css";

export default function ContactPage() {
  const rawWhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const whatsappNumber = rawWhatsappNumber.replace(/\D/g, "");

  const rawWhatsappText =
    process.env.NEXT_PUBLIC_WHATSAPP_TEXT ??
    "Hi! I saw your portfolio and would like to talk.";

  // Support both plain text and pre-encoded env values.
  const whatsappText = (() => {
    try {
      return decodeURIComponent(rawWhatsappText);
    } catch {
      return rawWhatsappText;
    }
  })();

  const whatsappHref = whatsappNumber
    ? `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappText)}`
    : "#";

  return (
    <main className={styles.page}>
      <SiteHeader styles={styles} />

      <section className={styles.section}>
        <h1>Connect with me</h1>
        <p>Dedicated page with smooth scroll and direct contact fields.</p>

        <a
          href={whatsappHref}
          className={styles.whatsappButton}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!whatsappNumber}
        >
          <FaWhatsapp aria-hidden="true" className={styles.whatsappIcon} />
          {whatsappNumber ? "Chat on WhatsApp" : "Set WhatsApp Number in .env.local"}
        </a>

        <ContactForm />
      </section>
    </main>
  );
}
