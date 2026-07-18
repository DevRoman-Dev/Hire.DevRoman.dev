export type PostSlug =
  | "laravel-filamentphp-admin-panels-2026"
  | "prestashop-8-migration-zero-downtime"
  | "rest-api-laravel-sanctum-openapi";

export type Post = {
  slug: PostSlug;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingTime: number; // minutes
  tags: string[];
  content: string; // markdown-ish (rendered as paragraphs + headings via a tiny renderer)
};

// Content is authored in a light markdown subset:
//   # heading 1 / ## heading 2 / ### heading 3
//   - bullet list item
//   ```code```
//   blank line = paragraph break
export const POSTS: Record<PostSlug, Post> = {
  "laravel-filamentphp-admin-panels-2026": {
    slug: "laravel-filamentphp-admin-panels-2026",
    title: "Building Laravel + FilamentPHP admin panels in 2026",
    description:
      "How I ship FilamentPHP v3 admin panels with 40+ resources, multi-tenancy, RBAC and real-time Livewire widgets — the stack I use in every project this year.",
    publishedAt: "2026-05-14",
    readingTime: 9,
    tags: ["Laravel", "FilamentPHP", "Livewire", "Admin panels"],
    content: `## Why FilamentPHP won my 2026 stack

FilamentPHP v3 has quietly become the default admin panel for serious Laravel apps. The reasons are mundane and important: it ships with a real form / table / action DSL, it does not fight you when you need a custom page, and Livewire 3 keeps the interactive parts fast without a JavaScript build step.

Every new Laravel project I start in 2026 gets a Filament admin panel before the first business feature ships. Here is how.

## The baseline setup

- Laravel 11 with strict types and \`declare(strict_types=1)\`
- FilamentPHP v3 with the default panel builder
- Spatie Permissions for RBAC — never hand-roll roles
- Spatie Activity Log for audit trails
- Filament Shield for policy scaffolding
- Horizon for background jobs, Redis for cache

Filament ships with sensible defaults, but the moment your admin panel grows past ten resources you want two conventions in place:

- Resources live under \`App\\Filament\\Resources\` and never contain business logic — they call service classes.
- Every write action goes through a dedicated action class so bulk operations, imports and audit logs share the same code path.

## Multi-tenancy without the pain

Filament v3 has first-class multi-tenancy. I use it in three flavours:

- **Team scoping (most common)**: current user picks a team, all queries scope by \`team_id\`. RLS-style, enforced in a global scope.
- **Domain scoping**: separate subdomains per tenant, one panel, shared code.
- **DB-per-tenant**: rare, but Filament handles the tenant-model contract cleanly.

The mistake I see teams make is enforcing tenancy only in Filament. Do it in a global scope on the Eloquent model — Filament will pick it up automatically, and any command / job / API endpoint stays safe too.

## Real-time widgets with Livewire 3

Filament widgets are Livewire components under the hood. Two patterns pay for themselves within a week:

- **Poll-driven dashboards**: \`\$this->pollingInterval\` on stat widgets for near-real-time counters without Websockets.
- **Reverb-driven feeds**: for activity streams, wire Livewire to Reverb (or Pusher) so events push instead of poll.

For most CRMs the poll pattern is enough. For anything with agents watching queues (support desks, dispatch tools), push wins.

## What I would skip

- Do not build custom form fields until the stock ones truly do not fit. Ninety percent of the time \`Forms\\Components\\Group\` plus a couple of hidden state fields does the job.
- Do not over-invest in Filament themes early. A neutral panel that ships this week beats a themed one that ships next quarter.

## The takeaway

FilamentPHP in 2026 is boring in the best way. The v3 API is stable, the ecosystem covers the 90 percent, and the parts that need custom code fit cleanly next to your Laravel service layer. Every internal tool I would have built in Retool a few years back now ships as a Filament panel that the same team can extend.
`,
  },
  "prestashop-8-migration-zero-downtime": {
    slug: "prestashop-8-migration-zero-downtime",
    title: "Migrating PrestaShop 1.7 to 8 with zero downtime",
    description:
      "A field guide to blue-green PrestaShop 1.7 → 8 migrations: schema deltas, module rewrites, cache warm-up and the cutover checklist.",
    publishedAt: "2026-04-02",
    readingTime: 11,
    tags: ["PrestaShop", "E-commerce", "Migrations"],
    content: `## PrestaShop 8 is worth the pain

If you are running PrestaShop 1.7 in 2026 you are on a maintenance runway that ends soon. PrestaShop 8 is faster, more modular, and — critically — supported. The catch is that the migration is not a button. Custom modules break, overrides break, themes break, payment integrations sometimes break.

Below is the playbook I use for zero-downtime migrations on stores with tens of thousands of SKUs and real customer traffic.

## The blue-green setup

- **Blue** — the current 1.7 store, serving customers.
- **Green** — a new PrestaShop 8 instance running against a copy of the database.
- A one-way sync from blue to green, running continuously.

You cut over when green is verified. If anything goes wrong you flip DNS back to blue. Nobody sees a maintenance page.

## Schema delta strategy

The naive approach is a full mysqldump and restore. On a 40 GB store that is hours of downtime and hours of catching up on missed orders.

The approach that works:

- Take a full snapshot into green at T0.
- Replay every write since T0 as a delta.
- At cutover, stop writes to blue for 30 to 90 seconds, drain the queue, flip DNS, resume.

Tools I actually use:

- \`mysqldump --single-transaction\` for the initial snapshot.
- A change-data-capture stream from binlogs (\`mysqlbinlog\` piped to a small consumer) for the delta.
- A hand-written diff pass on the last 60 seconds to guarantee nothing was missed.

## Modules and overrides

This is where most migrations die. Rules I stick to:

- **Never migrate an override**. Rewrite it as a module hook.
- **Custom modules get compatibility-tested first**. Half of PrestaShop 1.7 modules die on PrestaShop 8 because of Smarty template changes and PHP 8.2 strict types.
- **Payment modules are the highest risk**. Test in sandbox with real 3DS2 flows before cutover.

Budget a full week per non-trivial module for the compatibility pass. Do not skip this and hope.

## Cache warm-up

PrestaShop 8 with Symfony cache and Redis is fast — but the first request to a cold cache is slow. Warm before cutover:

- Crawl every category and product page.
- Prime the Symfony container cache.
- Prime OPcache with a preload script.

## The cutover checklist

- Freeze deploys 24 hours before.
- Announce the cutover window to the merchant.
- Stop cron on both stores.
- Drain the order queue.
- Flip DNS with a low TTL set 24 hours earlier.
- Watch error logs and payment success rate for 60 minutes.
- Only then, re-enable cron on green and archive blue.

## What I have learned

The best migrations feel boring on the day. All the drama happens in the two weeks before, when you find every module override the previous team forgot to document. Give yourself that time and the cutover itself takes an hour.
`,
  },
  "rest-api-laravel-sanctum-openapi": {
    slug: "rest-api-laravel-sanctum-openapi",
    title: "REST APIs with Laravel Sanctum and OpenAPI in 2026",
    description:
      "A pragmatic template for Laravel REST APIs: versioning, Sanctum vs Passport, idempotency, rate limiting and OpenAPI docs your mobile team can trust.",
    publishedAt: "2026-02-20",
    readingTime: 8,
    tags: ["Laravel", "REST API", "OpenAPI", "Sanctum"],
    content: `## Sanctum won, mostly

For every REST API I ship on Laravel in 2026 the default is Sanctum. Passport is still fine if you need full OAuth2 flows for third parties, but for most mobile and SPA clients Sanctum is faster to set up, easier to audit and cheaper to run.

## The template I start from

- **Versioning**: URL-based (\`/api/v1/…\`). Header-based versioning is elegant but nobody debugs it well.
- **Auth**: Sanctum personal access tokens for mobile, Sanctum SPA cookies for the web dashboard.
- **Idempotency**: \`Idempotency-Key\` header on every write endpoint mobile calls with retries.
- **Rate limiting**: per user, per IP, per route. RateLimiter facade, custom limiters per tier.
- **Docs**: Scramble or L5-Swagger generating OpenAPI 3 from PHP attributes.
- **Contract tests**: Pest tests that assert response shape matches the OpenAPI schema.

## Idempotency is not optional

Mobile networks are hostile. Any write endpoint the mobile client calls will be retried, sometimes days later when the app returns to the foreground. Without idempotency you get duplicate orders, duplicate charges and support tickets you cannot explain.

The pattern:

- Client generates a UUID per logical action, sends it as \`Idempotency-Key\`.
- Server stores \`{key, response_hash, response_body, created_at}\` for 24 hours.
- On a duplicate key, return the cached response verbatim. Do not re-execute the handler.

Ten lines of middleware. Saves you a support conversation a week.

## OpenAPI as the source of truth

The moment you have a second consumer of your API (say, iOS and Android) the OpenAPI document is your source of truth, not your Postman collection. Two rules:

- The document is generated from the code, not hand-written. Scramble does this from route + FormRequest attributes.
- The document is checked in CI. If the generated spec differs from the committed one, CI fails.

Bonus: point your mobile team at an OpenAPI generator for TypeScript / Swift / Kotlin clients and stop debating field names.

## Rate limiting per tier

Free tier, paid tier and internal tools should not share a rate bucket. Laravel's RateLimiter facade takes a closure — use it to key by user, tier, endpoint. Add a \`Retry-After\` header on 429s so the client backs off intelligently.

## Observability

Every request should carry a request ID (either the incoming header or generated). Log it, propagate it into jobs, return it on 5xx responses. When a customer opens a support ticket with "it failed at 3:14 pm" you want to grep, not guess.

## In summary

Laravel + Sanctum + OpenAPI + a tiny idempotency layer is a boringly effective REST API stack in 2026. Nothing on that list is exotic; the win is in choosing it deliberately and not adding what you do not need.
`,
  },
};

export const POST_ORDER: PostSlug[] = [
  "laravel-filamentphp-admin-panels-2026",
  "prestashop-8-migration-zero-downtime",
  "rest-api-laravel-sanctum-openapi",
];

export function postUrl(slug: PostSlug): string {
  return `/blog/${slug}`;
}
