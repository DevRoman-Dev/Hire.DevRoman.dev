import { Search, FileText, Code2, Rocket } from "lucide-react";

const ICONS = [Search, FileText, Code2, Rocket];

export function Process({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle: string;
  steps: { title: string; desc: string; duration: string }[];
}) {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>
        </div>
        <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <li
                key={s.title}
                className="relative p-6 rounded-xl border border-border bg-card hover:border-brand/60 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-lg bg-brand-gradient text-brand-foreground flex items-center justify-center shadow-glow">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-xs uppercase tracking-wider text-brand font-mono">
                  {s.duration}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
