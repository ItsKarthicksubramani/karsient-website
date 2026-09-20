import { NextResponse } from "next/server";

// Sends the enquiry by email via Resend (https://resend.com).
// Requires these environment variables to be set on the hosting provider:
//   RESEND_API_KEY   — from Resend dashboard → API Keys
//   CONTACT_FROM_EMAIL — e.g. "Karsient Website <onboarding@resend.dev>"
//                         (or an address on a verified domain)
//   CONTACT_TO_EMAIL   — where enquiries should land, e.g. contact@karsient.com
// All three are already configured for this deployment.

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@karsient.com";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Karsient Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body ?? {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      name.trim().length < 2 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      message.trim().length < 10
    ) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    }

    // eslint-disable-next-line no-console
    console.log("New contact enquiry:", { name, email, company, service, message });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // eslint-disable-next-line no-console
      console.error("RESEND_API_KEY is not set — cannot deliver email. See app/api/contact/route.ts.");
      return NextResponse.json(
        { error: "Email delivery is not configured on the server yet. Your enquiry was logged but not emailed." },
        { status: 503 }
      );
    }

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          company ? `Company: ${company}` : null,
          service ? `Service: ${service}` : null,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!emailRes.ok) {
      const detail = await emailRes.text().catch(() => "");
      // eslint-disable-next-line no-console
      console.error("Resend API error:", emailRes.status, detail);
      return NextResponse.json({ error: "Unable to send email right now. Please try again shortly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }
}
