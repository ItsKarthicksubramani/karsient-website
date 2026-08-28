import { NextResponse } from "next/server";

// Sends the enquiry by email via Resend (https://resend.com).
//
// SETUP (this was the reason submissions were not arriving by email —
// previously this route only logged to the server console and never
// actually sent anything):
//   1. npm install resend
//   2. Add RESEND_API_KEY to your hosting provider's environment variables.
//   3. Verify a sending domain in Resend and update CONTACT_FROM_EMAIL below
//      (or set a CONTACT_FROM_EMAIL env var) to an address on that domain.
//   4. Set CONTACT_TO_EMAIL if enquiries should go somewhere other than
//      the default site contact address.
//
// Until RESEND_API_KEY is set, the route still validates submissions and
// logs them server-side so nothing is silently lost, but it returns a
// clear error to the visitor instead of a false "success" — so the form
// won't claim an email was sent when it wasn't.

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@karsient.com";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Karsient Website <no-reply@karsient.com>";

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
      console.error(
        "RESEND_API_KEY is not set — the contact form cannot deliver email yet. See app/api/contact/route.ts for setup steps."
      );
      return NextResponse.json(
        { error: "Email delivery is not configured on the server yet. Your enquiry was logged but not emailed." },
        { status: 503 }
      );
    }

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
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
