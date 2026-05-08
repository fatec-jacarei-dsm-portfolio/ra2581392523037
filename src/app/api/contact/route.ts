import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const { email, message } = (await request.json()) as {
      email?: string;
      message?: string;
    };

    const senderEmail = email?.trim() ?? "";
    const content = message?.trim() ?? "";

    if (!senderEmail || !content) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(senderEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

    if (!apiKey || !to) {
      return NextResponse.json(
        { error: "Server email settings are not configured yet." },
        { status: 500 },
      );
    }

    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New portfolio contact from ${senderEmail}`,
        reply_to: senderEmail,
        text: `Sender: ${senderEmail}\n\nMessage:\n${content}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Email provider error: ${errorText}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }
}
