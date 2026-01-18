# WHOME - Internet Provider Landing Page

Platform marketing digital untuk WHOME Internet Provider, RT/RW Net berbasis di Tanjung Priok, Jakarta.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **State**: Zustand
- **Deployment**: Vercel

## Features

- Landing page dengan hero section modern
- Pricing cards untuk 3 paket internet
- Form pendaftaran dengan integrasi WhatsApp
- Admin dashboard untuk kelola leads
- Responsive design (mobile-first)

## Getting Started

### 1. Clone & Install

```bash
git clone <repository-url>
cd whome
npm install
```

### 2. Environment Variables

Buat file `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_WHATSAPP_ADMIN=6285117088518
```

### 3. Database Setup

Jalankan SQL berikut di Supabase SQL Editor:

```sql
-- Create tables
CREATE TABLE packages (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  speed_mbps INTEGER NOT NULL,
  price INTEGER NOT NULL,
  features TEXT[] DEFAULT '{}',
  is_popular BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  address TEXT NOT NULL,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  package_id TEXT NOT NULL,
  status TEXT DEFAULT 'new_lead' CHECK (status IN ('new_lead', 'surveying', 'installed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 4. Run Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── (public)/           # Public pages with Navbar/Footer
│   │   ├── layout.tsx
│   │   ├── page.tsx        # Landing page
│   │   └── daftar/         # Registration page
│   ├── admin/              # Admin dashboard (no Navbar)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx          # Root layout
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── PricingCard.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   └── RegistrationForm.tsx
├── lib/
│   ├── supabase.ts         # Supabase client
│   └── utils.ts            # Utility functions
└── stores/
    └── useAppStore.ts      # Zustand store
```

## Deployment to Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/daftar` | Registration form |
| `/admin` | Admin dashboard |

## License

MIT
