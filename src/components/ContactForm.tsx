"use client";

import { FormEvent, useState } from "react";
import styles from "@/src/app/contact/page.module.css";

type SendState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SendState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!email || !message) {
      setState("error");
      setFeedback("Please fill in your email and message.");
      return;
    }

    try {
      setState("sending");
      setFeedback("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(body?.error ?? "Could not send your message.");
      }

      form.reset();
      setState("success");
      setFeedback("Message sent successfully. I will get back to you soon.");
    } catch (error) {
      setState("error");
      setFeedback(
        error instanceof Error ? error.message : "Could not send your message.",
      );
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email" className={styles.srOnly}>
        Email
      </label>
      <input id="email" name="email" type="email" placeholder="Email" required />

      <label htmlFor="message" className={styles.srOnly}>
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Message"
        required
      />

      {feedback ? (
        <p
          className={state === "success" ? styles.feedbackSuccess : styles.feedbackError}
          role="status"
        >
          {feedback}
        </p>
      ) : null}

      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Stay Connected"}
      </button>
    </form>
  );
}
