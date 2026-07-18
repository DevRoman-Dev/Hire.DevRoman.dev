import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileNav({
  items,
  cta,
}: {
  items: { href: string; label: string }[];
  cta: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="md:hidden p-2 rounded-md border border-border bg-card hover:bg-accent transition"
      >
        <Menu className="w-4 h-4" />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md border border-border bg-card"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="px-6 mt-4 flex flex-col gap-1 text-lg font-display">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-border"
              >
                {it.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-brand-gradient text-brand-foreground font-semibold shadow-glow"
            >
              {cta}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
