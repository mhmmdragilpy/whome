# WHOME - Internet Rumah Cepat & Stabil

![WHOME Logo](public/logo.png)

Platform marketing digital untuk WHOME Internet Provider, RT/RW Net berbasis di Tanjung Priok, Jakarta.

## 🚀 Live Demo

- **Website**: [whome-provider.vercel.app](https://whome-provider.vercel.app)
- **Admin*  *: [whome-provider.vercel.app/admin](https://whome-provider.vercel.app/admin)

## ✨ Features

- 🏠 **Landing Page** - Hero section modern dengan mesh gradient
- 💰 **Pricing Cards** - 3 paket internet (Hemat, Keluarga, Pro)
- 📝 **Registration Form** - Integrasi WhatsApp & Supabase
- 📊 **Admin Dashboard** - Kelola data pelanggan
- 📱 **Responsive** - Mobile-first design

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | Framework |
| TypeScript | Language |
| Tailwind CSS | Styling |
| Supabase | Database |
| Zustand | State Management |
| Vercel | Deployment |

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/mhmmdragilpy/whome.git
cd whome

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## ⚙️ Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_WHATSAPP_ADMIN=6285117088518
```

## 🗄️ Database Setup

Run this SQL in Supabase SQL Editor:

```sql
-- Packages table
CREATE TABLE packages (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  speed_mbps INTEGER NOT NULL,
  price INTEGER NOT NULL,
  features TEXT[] DEFAULT '{}',
  is_popular BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  address TEXT NOT NULL,
  package_id TEXT NOT NULL,
  status TEXT DEFAULT 'new_lead',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 📁 Project Structure

```
src/
├── app/
│   ├── (public)/        # Pages with Navbar/Footer
│   │   ├── page.tsx     # Landing page
│   │   └── daftar/      # Registration
│   ├── admin/           # Admin dashboard
│   └── layout.tsx       # Root layout
├── components/          # UI components
├── lib/                 # Utilities & Supabase
└── stores/              # Zustand stores
```

## 📄 Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/daftar` | Registration form |
| `/admin` | Admin dashboard |

## 💳 Paket Internet

| Paket | Speed | Harga |
|-------|-------|-------|
| Hemat | 5 Mbps | Rp150.000/bulan |
| Keluarga | 10 Mbps | Rp200.000/bulan |
| Pro | 20 Mbps | Rp250.000/bulan |

**Biaya Instalasi:** Rp250.000 (sekali bayar)

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

## 📞 Contact

- **WhatsApp**: 085117088518
- **Email**: info@whome.id
- **Location**: Tanjung Priok, Jakarta

## 📝 License

MIT License - [LICENSE](LICENSE)

---

Developed by **RajailDev™**
