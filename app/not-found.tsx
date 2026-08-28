import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-px mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
        This page didn&apos;t make it to production.
      </h1>
      <p className="mt-4 font-body text-base text-mist">
        The page you&apos;re looking for may have moved or no longer exists.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}
