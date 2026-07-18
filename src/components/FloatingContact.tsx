import { useEffect, useState } from "react";
import { Send, MessageCircle, Calendar, Mail, X } from "lucide-react";
import { CONTACTS } from "@/lib/contacts";

export function FloatingContact({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const items = [
    { href: CONTACTS.telegram, icon: Send, label: "Telegram", color: "bg-[#229ED9] text-white" },
    { href: CONTACTS.whatsapp, icon: MessageCircle, label: "WhatsApp", color: "bg-[#25D366] text-white" },
    { href: CONTACTS.calendly, icon: Calendar, label: "Book a call", color: "bg-brand text-brand-foreground" },
    { href: `mailto:${CONTACTS.email}`, icon: Mail, label: "Email", color: "bg-foreground text-background" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open &&
        items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full shadow-card font-medium text-sm ${it.color} hover:scale-105 transition`}
          >
            <it.icon className="w-4 h-4" />
            {it.label}
          </a>
        ))}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        className="w-14 h-14 rounded-full bg-brand-gradient text-brand-foreground shadow-glow flex items-center justify-center hover:scale-105 transition"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
