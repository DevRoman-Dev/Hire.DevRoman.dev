import { useState, type FormEvent } from "react";
import { Send, Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitLead } from "@/lib/contact.functions";
import { CONTACTS } from "@/lib/contacts";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  labels: {
    name: string;
    email: string;
    message: string;
    budget: string;
    timeline: string;
    submit: string;
    sending: string;
    or: string;
    emailMe: string;
    success: string;
    error: string;
    budgetOptions: string[];
    timelineOptions: string[];
  };
};

export function LeadForm({ locale, labels }: Props) {
  const send = useServerFn(submitLead);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setState("sending");
    setErrMsg("");
    try {
      await send({
        data: {
          name: String(f.get("name") || ""),
          email: String(f.get("email") || ""),
          message: String(f.get("message") || ""),
          budget: String(f.get("budget") || "") || null,
          timeline: String(f.get("timeline") || "") || null,
          locale,
          source: "landing-form",
          website: String(f.get("website") || ""),
        },
      });
      setState("ok");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setState("error");
      setErrMsg(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 p-6 md:p-8 rounded-2xl border border-border bg-card/90 backdrop-blur shadow-card"
    >
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Field label={labels.name} name="name" required maxLength={100} />
        <Field label={labels.email} name="email" type="email" required maxLength={255} />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <SelectField label={labels.budget} name="budget" options={labels.budgetOptions} />
        <SelectField label={labels.timeline} name="timeline" options={labels.timelineOptions} />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1.5">{labels.message}</label>
        <textarea
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={5000}
          className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-gradient text-brand-foreground font-semibold shadow-glow hover:opacity-90 transition disabled:opacity-60"
        >
          {state === "sending" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          {state === "sending" ? labels.sending : labels.submit}
        </button>
        <span className="text-sm text-muted-foreground">{labels.or}</span>
        <a
          href={`mailto:${CONTACTS.email}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
        >
          <Mail className="w-4 h-4" /> {labels.emailMe}
        </a>
        {state === "ok" && (
          <span className="inline-flex items-center gap-1.5 text-sm text-brand">
            <CheckCircle2 className="w-4 h-4" /> {labels.success}
          </span>
        )}
        {state === "error" && (
          <span className="inline-flex items-center gap-1.5 text-sm text-destructive">
            <AlertCircle className="w-4 h-4" /> {errMsg || labels.error}
          </span>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={maxLength}
        className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="">—</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
