## Supabase Setup

1) Create a Supabase project at https://supabase.com and copy the Project URL and anon key.

2) Configure environment variables. Copy `.env.example` to `.env` at the repo root and fill:

```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

3) Create tables. In the Supabase SQL editor, run:

```sql
-- Reviews table
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  rating int2 not null check (rating between 1 and 5),
  text text not null,
  approved boolean not null default true,
  created_at timestamptz not null default now()
);

-- Contact messages table
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  service text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.reviews enable row level security;
alter table public.contact_messages enable row level security;

-- Allow anonymous inserts to both tables
create policy anon_insert_reviews on public.reviews for insert to anon with check (true);
create policy anon_select_approved_reviews on public.reviews for select to anon using (approved = true);
create policy anon_insert_contact on public.contact_messages for insert to anon with check (true);
```

Note: `gen_random_uuid()` requires the `pgcrypto` extension (enabled by default in Supabase). If needed run `create extension if not exists pgcrypto;` first.

4) Install dependencies and run dev/build:

```bash
npm install
npm run dev
# or
npm run build
```

### Code Integration
- Supabase client: `src/utils/supabaseClient.ts`
- DB helpers: `src/utils/db.ts`
- Reviews: `src/components/Reviews.tsx` fetches/creates reviews
- Contact: `src/components/Contact.tsx` submits contact messages


  # Car Cleaning Website Design

  This is a code bundle for Car Cleaning Website Design. The original project is available at https://www.figma.com/design/Yrm09qrChRq6kzH1e3ch0t/Car-Cleaning-Website-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  