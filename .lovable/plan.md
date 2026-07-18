
## План покращень

### 1. Блог / статті (MDX)
- Нова таблиця `posts` в БД: `slug, locale, title, description, cover_url, content_md, tags[], published_at, reading_time`
- Роути:
  - `/blog` — індекс (EN), `/uk/blog`, `/pl/blog`, `/ru/blog`
  - `/blog/$slug` + `/uk/blog/$slug` тощо
- SEO на кожен пост: `Article` schema (author=Roman Matviy, datePublished, wordCount), `BreadcrumbList`, hreflang між локалями, `og:type=article`, cover як `og:image`
- RSS feed на `/rss.xml`
- Sitemap: додати всі пости з `lastmod`
- Стартовий контент — 3 seed-пости в міграції: «Laravel + FilamentPHP admin в 2026», «PrestaShop 8 міграція без downtime», «REST API з Sanctum + OpenAPI»

### 2. Локалізовані сторінки послуг
Розширити `src/lib/services.ts` полем `i18n: Record<Locale, {name, headline, description, longDescription, features, reviews}>`.

Нові роути:
- `/uk/poslugy`, `/uk/poslugy/$slug`
- `/pl/uslugi`, `/pl/uslugi/$slug`
- `/ru/uslugi`, `/ru/uslugi/$slug`

Локалізовані slug-и (аналогічно кейсам): `laravel-rozrobka`, `sklep-internetowy`, `crm-erp-sistemy` тощо. `hreflang` між усіма 4 локалями + `x-default`. `Service`+`Offer`+`AggregateRating`+`Review` перекладені по мові.

### 3. Галузеві / стек landing-и
Нові статичні роути під високочастотні запити:
- `/laravel-developer` (+ `/uk/laravel-rozrobnyk`, `/pl/laravel-developer`, `/ru/laravel-razrabotchik`)
- `/filamentphp-developer`
- `/prestashop-developer`
- `/wordpress-developer`

Кожен: H1 під запит, USP, tech stack, 3–4 релевантні кейси (фільтр по `CASE_DETAILS.tech`), відгуки з відповідних сервісів, FAQ (5 питань під запит), CTA-форма. Schema: `ProfessionalService` + `Person` + `AggregateRating` + `FAQPage`.

Новий модуль `src/lib/verticals.ts` з конфігом (name, h1, keywords, techFilter, faqItems, relatedServices).

### 4. Auto-OG зображення
Server route `src/routes/api/og/$type.$slug[.]png.ts` (тип: `case`, `service`, `blog`, `vertical`).

Реалізація: `satori` + `@resvg/resvg-wasm` (Worker-сумісні, WASM-бандлиться). Шаблон: темний фон, заголовок 60px, підзаголовок, аватар + «Roman Matviy · Senior Laravel», градієнт-акцент. Кеш `Cache-Control: public, max-age=31536000, immutable`.

Оновити `caseHead`, `serviceHead` і майбутні `articleHead` та `verticalHead` — `og:image` вказує на `/api/og/case/<slug>.png` тощо.

### 5. 301 редіректи старих URL кейсів
У `src/server.ts` (перед виклику TSS handler) додати мапу `LEGACY_CASE_REDIRECTS` для випадків типу `/uk/portfolio/<en-slug>` → `/uk/portfolio/<uk-slug>`. Побудувати з `LOCALIZED_SLUGS`. Повертати `Response` зі статусом 301 + `Location`. Аналогічно якщо додаватимемо localized сервіси — 301 з `/uk/services/*` → `/uk/poslugy/*`.

### 6. Оновлення sitemap
Додати: `/blog`, всі пости × 4 локалі, всі vertical landing-и × 4 локалі, локалізовані URL сервісів. Всі з коректними `lastmod`.

## Технічні деталі

**Стек нових залежностей:**
- `satori` + `@resvg/resvg-wasm` — OG рендер (WASM працює на Cloudflare Workers)
- Markdown у постах: `marked` + `dompurify` (легкі, edge-safe). MDX не тягнемо — надмір для статей.
- Шрифт для OG: підвантажити `Inter` .woff як asset

**БД міграція `posts`:**
```sql
create table public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  locale text not null check (locale in ('en','uk','pl','ru')),
  title text not null, description text not null,
  cover_url text, content_md text not null,
  tags text[] default '{}',
  published_at timestamptz, created_at timestamptz default now(),
  unique(slug, locale)
);
grant select on public.posts to anon, authenticated;
grant all on public.posts to service_role;
alter table public.posts enable row level security;
create policy "public read published" on public.posts for select
  using (published_at is not null and published_at <= now());
```

Читання через server publishable client (у `*.functions.ts`, читаємо `process.env.SUPABASE_*` у handler).

**Порядок реалізації:**
1. Міграція + seed 3 постів
2. Блог роути + `Article` schema + RSS
3. Локалізовані сервіси (i18n у `services.ts`, роути, hreflang, 301)
4. Vertical landing-и
5. Auto-OG endpoint + підключення до всіх head()
6. Sitemap update + 301 map для кейсів

Після завершення — `bunx tsgo --noEmit` + `bun run build` для перевірки.

## Що НЕ чіпаємо
- Існуючі роути портфоліо (`/portfolio/$slug`, `/uk/portfolio/$slug`, ...) — залишаються як є
- `LOCALIZED_SLUGS`, `getCasePath`, `caseHead` — тільки додаємо 301 для старих URL

## Питання перед стартом
- **Обсяг блогу**: 3 seed-пости зараз достатньо, чи маєш готові тексти статей?
- **OG-шаблон**: одноманітний темний з градієнтом, чи хочеш побачити 2–3 варіанти?
- **Vertical landing slug-и** іншими мовами — використати транслітерацію (`laravel-rozrobnyk`) чи залишити англійські (`laravel-developer`) в usіх локалях?
