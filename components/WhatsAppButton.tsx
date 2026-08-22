import { site } from "@/lib/data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
        "Hi Karsient, I'd like to talk about a project."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Karsient on WhatsApp"
      className="focus-ring group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-ink">
        <path d="M12.04 2.5c-5.26 0-9.54 4.28-9.54 9.55 0 1.68.44 3.32 1.28 4.77L2.5 21.5l4.85-1.27a9.5 9.5 0 0 0 4.69 1.23h.01c5.27 0 9.55-4.28 9.55-9.55 0-2.55-1-4.95-2.8-6.75a9.5 9.5 0 0 0-6.76-2.66zm5.6 13.63c-.24.66-1.4 1.27-1.93 1.34-.5.07-1.11.1-1.79-.11a16.4 16.4 0 0 1-1.75-.65c-3.08-1.33-5.08-4.43-5.24-4.63-.15-.2-1.25-1.67-1.25-3.18 0-1.52.8-2.26 1.08-2.57.28-.3.62-.38.83-.38l.6.01c.19.01.44-.07.69.53.24.6.83 2.07.9 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.24.66-.15.27.1 1.71.81 2 .96.3.15.5.22.57.35.07.13.07.72-.17 1.38z" />
      </svg>
      <span className="absolute right-16 hidden whitespace-nowrap rounded-lg bg-ink-soft px-3 py-1.5 font-body text-xs text-white shadow-lg group-hover:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
