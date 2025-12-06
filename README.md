# Mi Sitio - Nuxt 4 Full-Stack App

Modern full-stack website built with Nuxt 4, Prisma ORM, and Neon PostgreSQL database.

## Tech Stack

- **Framework:** Nuxt 4
- **UI Library:** Nuxt UI (Tailwind CSS 4)
- **Database:** Neon PostgreSQL
- **ORM:** Prisma
- **Icons:** Nuxt Icon
- **Images:** Nuxt Image

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Database

Create a `.env` file in the root directory:

```env
DATABASE_URL="your-neon-database-url"
```

Get your Neon database URL from [neon.tech](https://neon.tech)

### 3. Setup Database

```bash
# Generate Prisma Client
pnpm prisma generate

# Run migrations
pnpm prisma migrate dev

# Seed database (optional)
pnpm seed
```

### 4. Start Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm seed` - Seed database with sample data
- `pnpm prisma studio` - Open Prisma Studio (database GUI)

## Project Structure

```
├── app/
│   ├── components/     # Vue components
│   ├── pages/          # Route pages
│   └── layouts/        # Layout components
├── server/
│   └── api/            # API endpoints
├── prisma/
│   └── schema.prisma   # Database schema
└── lib/
    └── prisma.ts       # Prisma client instance
```

## Learn More

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt UI](https://ui.nuxt.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Neon Documentation](https://neon.tech/docs)
