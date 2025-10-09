# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev              # Start dev server with Turbo
npm run build            # Build for production
npm run preview          # Build and start production server
npm run start            # Start production server

# Code Quality
npm run check            # Run Biome linter and formatter checks
npm run check:write      # Auto-fix safe issues
npm run check:unsafe     # Auto-fix including unsafe changes
npm run typecheck        # Run TypeScript type checking

# Database
npm run db:generate      # Generate migrations from schema
npm run db:migrate       # Run migrations
npm run db:push          # Push schema changes directly (dev only)
npm run db:studio        # Open Drizzle Studio GUI

# Development Tools
npm run ngrok            # Expose local server via ngrok for webhook testing
```

## Tech Stack

**T3 Stack** - Next.js 15 with App Router, tRPC, Drizzle ORM, Tailwind CSS v4

**Core Technologies:**
- **Next.js 15**: App Router with React Server Components
- **tRPC**: End-to-end typesafe API layer
- **Drizzle ORM**: Type-safe database access with PostgreSQL
- **Better Auth**: Authentication with email/password and GitHub OAuth
- **Polar**: Subscription billing and payment integration
- **Biome**: Linting and formatting (replaces ESLint/Prettier)
- **Tailwind CSS v4**: Utility-first styling

## Architecture

### Authentication Flow

Authentication uses Better Auth with Drizzle adapter. Configuration in `auth.ts`:
- Email/password authentication enabled
- GitHub OAuth provider configured
- Polar billing integration with automatic customer creation
- Session management via cookies

Auth schema in `src/server/db/schema/auth.ts` defines:
- `user` - User accounts
- `session` - Active sessions with expiry
- `account` - OAuth provider links
- `verification` - Email verification tokens

Protected routes are enforced via `src/middleware.ts`:
- Redirects authenticated users away from `/login`, `/signup`
- Redirects unauthenticated users away from `/dashboard` routes

### Database Structure

**Drizzle ORM** with PostgreSQL connection pooling (cached in development).

**Schema Organization:**
- `src/server/db/schema/auth.ts` - Authentication tables (user, session, account, verification)
- `src/server/db/schema/subscription.ts` - Subscription management with Polar integration

**Table Naming Convention:** Application tables prefixed with `flowqr_`, auth tables unprefixed (required by Better Auth).

**Subscription System:**
- Tracks user subscription plans (free/basic/pro/premium)
- Monthly QR code limits and usage counters
- Links to Polar customer IDs for webhook processing

### tRPC API Layer

**Location:** `src/server/api/`

**Structure:**
- `trpc.ts` - Core tRPC setup with context, transformer (superjson), error formatting
- `root.ts` - Root router combining all sub-routers
- `routers/` - Individual API route modules

**Key Features:**
- Timing middleware with artificial dev delay (100-500ms) to catch waterfall issues
- Zod validation with formatted errors
- Database access via context

**Usage:**
- Server: `src/trpc/server.ts` - Server-side tRPC client
- Client: `src/trpc/react.tsx` - React Query integration

### Route Groups

Next.js App Router uses route groups for layout organization:

- `(landing)/` - Public marketing pages (landing, pricing, docs, etc.)
- `(auth)/` - Authentication pages (login, signup) with centered layout
- `(dashboard)/` - Protected dashboard pages with sidebar navigation
- `(flow)/` - QR code creation/editing flows with specialized layout

Each route group has its own `layout.tsx` defining the UI structure for that section.

### Polar Integration

Polar handles subscriptions and billing:

**Configuration** (`auth.ts`):
- Sandbox mode enabled for development
- Automatic customer creation on signup
- Checkout configured with product ID
- Success URL redirect after payment

**Webhooks** (`src/app/api/webhooks/polar/route.ts`):
- Receives Polar events for subscription changes
- Must be exposed publicly (use ngrok for local testing)
- Currently incomplete - needs handlers for subscription events

**Client Usage:**
- Better Auth Polar plugin provides checkout session management
- Checkout URLs generated per product slug

### Environment Variables

Validated via `@t3-oss/env-nextjs` in `src/env.js`:

**Required Server Vars:**
- `DATABASE_URL` - PostgreSQL connection string
- `POLAR_ACCESS_TOKEN` - Polar API token
- `POLAR_WEBHOOK_SECRET` - Polar webhook signing secret
- `POLAR_SUCCESS_URL` - Post-checkout redirect URL
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` - GitHub OAuth

**Development:**
- Set `SKIP_ENV_VALIDATION=1` to bypass validation (useful for Docker builds)
- Environment validation happens at build time

### Component Library

Shadcn/ui components in `src/components/ui/`:
- Built on Radix UI primitives
- Styled with Tailwind CSS
- Customized via `components.json` config
- Dark mode support via `next-themes`

Common components:
- `button.tsx`, `card.tsx`, `input.tsx`, `label.tsx`
- `dropdown-menu.tsx`, `avatar.tsx`, `badge.tsx`
- `alert.tsx`, `skeleton.tsx`

### Styling

**Tailwind CSS v4** with PostCSS:
- Global styles in `src/styles/globals.css`
- CSS variables for theming (light/dark mode)
- Biome configured to sort Tailwind classes
- Use `cn()` utility from `src/lib/utils.ts` for conditional classes

## Development Workflow

### Database Changes

1. Update schema files in `src/server/db/schema/`
2. Generate migration: `npm run db:generate`
3. Review generated SQL in `drizzle/` folder
4. Apply migration: `npm run db:migrate`

For rapid prototyping, use `npm run db:push` (skips migrations).

### Testing Webhooks Locally

Polar webhooks require a public URL:

```bash
npm run ngrok  # Exposes localhost:3000
# Update Polar dashboard with ngrok URL
```

The ngrok domain is pinned to `formally-warm-liger.ngrok-free.app`.

### Type Safety

- TypeScript strict mode enabled
- `noUncheckedIndexedAccess: true` for safer array access
- tRPC provides end-to-end type safety from DB to frontend
- Drizzle ORM infers types from schema

### Code Quality

Biome handles linting and formatting:
- Auto-sorts Tailwind classes in `clsx`, `cva`, `cn` calls
- Run `npm run check:write` before committing
- Integrates with VCS to respect `.gitignore`

## Current State

**Recent Work:**
- Polar webhook endpoint created but needs implementation
- Subscription schema defined
- Authentication and OAuth working
- Dashboard and flow layouts in progress

**Untracked Files:**
- `src/app/(flow)/` - Flow-related pages
- `src/app/api/polar/` - Polar API routes
- `src/utils/` - Utility functions

These should be reviewed and committed once stable.
