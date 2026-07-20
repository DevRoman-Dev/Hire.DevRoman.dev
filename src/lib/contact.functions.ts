import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(5000),
  budget: z.string().trim().max(50).optional().nullable(),
  timeline: z.string().trim().max(50).optional().nullable(),
  locale: z.string().trim().max(8).optional().nullable(),
  source: z.string().trim().max(100).optional().nullable(),
  // honeypot — must be empty
  website: z.string().max(0).optional().nullable(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) {
      // honeypot tripped — pretend success
      return { ok: true };
    }
    if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await (supabaseAdmin as any).from("leads").insert({
        name: data.name,
        email: data.email,
        message: data.message,
        budget: data.budget ?? null,
        timeline: data.timeline ?? null,
        locale: data.locale ?? null,
        source: data.source ?? "landing-form",
      });
      if (error) {
        console.error("[submitLead] insert failed:", error);
        throw new Error("Could not save your message. Please email roman@matviy.pp.ua directly.");
      }
    }
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      if (data.budget) formData.append("budget", data.budget);
      if (data.timeline) formData.append("service", data.timeline);
      formData.append("source", data.source ?? "hire.devroman.dev landing-form");

      await fetch("https://bot.programist.top/api/contact.php", {
        method: "POST",
        body: formData,
      });
    } catch (err) {
      console.error("[submitLead] fetch to external API failed:", err);
    }

    return { ok: true };
  });
