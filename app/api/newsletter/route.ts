import { NextResponse } from "next/server";

// Wire this up to your list provider of choice (Mailchimp, ConvertKit, Resend Audiences, etc.)
// using an API key stored in a Vercel Environment Variable.

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) ?? {};

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    // eslint-disable-next-line no-console
    console.log("Newsletter signup:", email);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }
}
