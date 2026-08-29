import { NextResponse } from "next/server";

// Sends newsletter signups via Resend, same setup as app/api/contact/route.ts.
// Swap in a real list provider (Mailchimp, ConvertKit, Resend Audiences, etc.)
// later if you want subscribers added to an actual list rather than emailed.

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@karsient.com";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Karsient Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) ?? {};

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    // eslint-disable-next-line no-console
    console.log("Newsletter signup:", email);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email delivery is not configured on the server yet." },
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
        subject: "New newsletter signup",
        text: `New newsletter signup: ${email}`,
      }),
    });

    if (!emailRes.ok) {
      return NextResponse.json({ error: "Unable to subscribe right now. Please try again shortly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }
}
