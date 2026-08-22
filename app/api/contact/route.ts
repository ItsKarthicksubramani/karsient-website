import { NextResponse } from "next/server";

// This route currently validates and logs submissions.
// To deliver real emails, plug in a provider such as Resend (https://resend.com):
//
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "Karsient Website <no-reply@karsient.com>",
//     to: "contact@karsient.com",
//     subject: `New enquiry from ${name}`,
//     text: message,
//   });
//
// Add RESEND_API_KEY to your Vercel project's Environment Variables.

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

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }
}
