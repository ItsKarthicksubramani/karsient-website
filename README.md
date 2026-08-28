# Karsient — Website

Production-ready Next.js 15 + TypeScript + Tailwind CSS + Framer Motion
website for **Karsient Private Limited**.

Pages: Home, About, Services, Industries, Case Studies, Careers, Insights,
Contact. SEO metadata, sitemap, robots.txt, and an auto-generated social
share image are already wired up.

---

## 1. What's inside

```
karsient/
  app/                 # Next.js App Router pages, layout, SEO files
  components/          # Navbar, Footer, forms, cards, motion wrappers
  lib/data.ts           # All site copy, services, industries, contact info
  public/               # Static assets
  package.json
  tailwind.config.ts
```

All contact details (email, phone, address, directors) live in
`lib/data.ts` — edit that one file to update them everywhere on the site.

**Placeholder content to replace before launch:** the Case Studies results,
Testimonials, Careers open roles, and Insights blog posts are written as
realistic examples, not real client data. Swap them for your own in
`lib/data.ts` (case studies/testimonials/process) and
`app/careers/page.tsx` / `app/insights/page.tsx` (roles and posts).

---

## 2. Run it locally first

You'll need **Node.js 20 or later** installed.

```bash
cd karsient
npm install
npm run dev
```

Open `http://localhost:3000` and click through every page once — this is
the fastest way to catch anything you want to tweak before it's live.

To build the way production will build it:

```bash
npm run build
npm run start
```

If `npm run build` reports any errors, fix those before deploying (see
"Troubleshooting" at the end).

---

## 3. Push it to GitHub

1. Create a new **empty** repository on GitHub, e.g. `karsient-website`
   (don't initialise it with a README — you already have one).
2. From inside the `karsient` folder:

```bash
git init
git add .
git commit -m "Initial Karsient website"
git branch -M main
git remote add origin https://github.com/<your-github-username>/karsient-website.git
git push -u origin main
```

`node_modules` and `.next` are already excluded via `.gitignore`.

---

## 4. Deploy to Vercel

1. Go to **vercel.com** and sign in (GitHub login is easiest).
2. Click **Add New → Project**.
3. Select the `karsient-website` repository you just pushed.
4. Framework preset: Vercel auto-detects **Next.js** — leave the default
   build settings as they are:
   - Build command: `next build`
   - Output directory: (default, leave blank)
   - Install command: `npm install`
5. Environment variables: none are required to deploy. If you later wire
   up real email delivery for the contact/newsletter forms (see §6), add
   those here.
6. Click **Deploy**. In a couple of minutes you'll get a live URL like
   `karsient-website.vercel.app` — check it over before moving to your
   own domain.

Every future `git push` to `main` automatically redeploys.

---

## 5. Connect www.karsient.com

Do this inside the Vercel project once step 4 is live:

1. Open your project → **Settings → Domains**.
2. Type `karsient.com` and click **Add**. Then also add `www.karsient.com`.
3. Vercel will show you the DNS records to create. Set **one** of the
   apex-domain options at your domain registrar (wherever `karsient.com`
   is registered) — typically:

   | Type | Name/Host | Value |
   |------|-----------|-------|
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

   (Vercel shows the exact current values on the Domains screen — use
   those over the table above if they differ, DNS targets occasionally
   change.)
4. In **Settings → Domains**, set `www.karsient.com` as the **primary**
   domain and redirect `karsient.com` → `www.karsient.com` (or the
   reverse — either is fine, just pick one so you don't split SEO between
   both).
5. DNS propagation usually takes anywhere from a few minutes to a few
   hours. Vercel will show a green checkmark next to each domain once
   it's verified and SSL (HTTPS) is issued automatically — no extra setup
   needed there.

Once verified, `www.karsient.com` is live and secured with HTTPS.

---

## 6. Making the contact & newsletter forms send real email

Right now, submitting the Contact form or Newsletter box validates the
input and logs it (visible in Vercel's function logs under the project's
**Logs** tab) but doesn't send an email yet — there's no email provider
wired in.

The easiest option is **Resend** (resend.com), which has a generous free
tier and a simple API:

1. Create a Resend account and verify `karsient.com` as a sending domain
   (they'll give you DNS records to add, same place as step 5).
2. In your Vercel project, go to **Settings → Environment Variables** and
   add:
   - `RESEND_API_KEY` = your Resend API key
3. Install the package and uncomment the example code already left as
   comments in `app/api/contact/route.ts`:

```bash
npm install resend
```

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Karsient Website <no-reply@karsient.com>",
  to: "contact@karsient.com",
  subject: `New enquiry from ${name}`,
  text: message,
});
```

4. Commit, push, and Vercel redeploys automatically with the new
   environment variable available.

The newsletter form (`app/api/newsletter/route.ts`) works the same way —
point it at Resend Audiences, Mailchimp, or whatever list provider you
prefer.

---

## 7. Post-launch checklist

- [ ] Visit `www.karsient.com/sitemap.xml` and `www.karsient.com/robots.txt`
      to confirm they load.
- [ ] Share a link on LinkedIn/WhatsApp once to confirm the auto-generated
      preview image and title look right.
- [ ] Submit the sitemap URL in **Google Search Console** and
      **Bing Webmaster Tools** for faster indexing.
- [ ] Test the Contact form end-to-end once real email sending (§6) is
      wired up.
- [ ] Replace the placeholder Case Studies, Testimonials, Careers roles,
      and Insights posts with real content.
- [ ] Double-check the WhatsApp button opens a chat to the right number.

---

## 8. Troubleshooting

- **Build fails on Vercel but ran fine locally:** check the Vercel build
  log for the exact TypeScript/lint error — Vercel uses a clean install,
  so a dependency mismatch is the most common cause. Re-run
  `rm -rf node_modules package-lock.json && npm install` locally to
  reproduce.
- **Domain shows "Invalid Configuration" in Vercel:** DNS hasn't
  propagated yet, or a record at your registrar doesn't match what
  Vercel expects — re-check the exact values shown on the Domains page.
- **Fonts or images look unstyled right after deploy:** hard-refresh
  (Vercel's CDN cache can take a minute to catch up after the very first
  deploy).

---

Questions or want help wiring anything above up — including the real
email sending, a CMS for the blog, or a design tweak — just ask.
