# e-Brochure SaaS Platform

## Overview

e-Brochure is a SaaS marketing website and lead generation platform designed to help retail companies create digital brochures. The platform enables users to transform static documents into interactive digital experiences that can be shared via WhatsApp, Instagram, or Facebook. The application serves as both a marketing site showcasing the product and a lead capture system for sales inquiries and custom template requests.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled using Vite
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming and custom design tokens
- **UI Components**: shadcn/ui component library built on Radix UI primitives (new-york style)
- **Animations**: Framer Motion for page transitions, scroll animations, and micro-interactions
- **State Management**: TanStack React Query for server state and API data caching
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Typography**: DM Sans (body text) and Outfit (display headings) from Google Fonts

### Backend Architecture
- **Framework**: Express.js on Node.js with TypeScript
- **API Design**: RESTful endpoints with Zod schemas for input validation and type-safe responses
- **Route Definitions**: Centralized in `shared/routes.ts` with typed request/response schemas
- **Development Server**: Vite dev server with HMR integration, tsx for running TypeScript directly

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Definition**: `shared/schema.ts` using Drizzle's schema builder with drizzle-zod for validation
- **Migrations**: Drizzle Kit manages schema migrations, output to `./migrations` directory
- **Current Tables**:
  - `contact_requests`: Sales form submissions (name, company, phone, industry, message)
  - `template_requests`: Custom template requests (name, email, request details)

### Project Structure
```
├── client/               # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable UI components and shadcn/ui
│   │   ├── pages/        # Route page components (Home, Gallery, Pricing, Contact, TemplateRequest)
│   │   ├── hooks/        # Custom React hooks (forms, language, mobile detection)
│   │   └── lib/          # Utilities and query client configuration
├── server/               # Express backend
│   ├── index.ts          # Server entry point with middleware setup
│   ├── routes.ts         # API route handlers
│   ├── storage.ts        # Database operations layer
│   ├── db.ts             # Database connection setup
│   └── vite.ts           # Vite dev server integration
├── shared/               # Shared code between frontend and backend
│   ├── schema.ts         # Drizzle database schema and Zod validation
│   └── routes.ts         # API route definitions with type contracts
```

### Key Design Decisions
- **Monorepo Structure**: Client and server share TypeScript types through the `shared/` directory, ensuring type safety across the stack
- **Schema-First Validation**: Drizzle-zod generates validation schemas from database tables, used both for API validation and form handling
- **Component Library**: shadcn/ui provides accessible, customizable components that integrate with Tailwind's design system
- **Internationalization**: Custom language hook (`use-language.tsx`) supports Turkish, English, and German translations

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connected via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session store for Express (available in dependencies)

### Frontend Libraries
- **Radix UI**: Accessible primitive components (dialogs, dropdowns, forms, etc.)
- **Framer Motion**: Animation library for page transitions and interactive elements
- **TanStack React Query**: Server state management and data fetching
- **Embla Carousel**: Carousel/slider component

### Build Tools
- **Vite**: Frontend build tool with React plugin and HMR
- **esbuild**: Server bundling for production builds
- **Drizzle Kit**: Database migration tooling

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit integration (dev only)