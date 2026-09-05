# Architecture
Next.js App Router -> API routes -> Prisma ORM -> SQLite locally / PostgreSQL in production.
Public site and protected admin dashboard share the application. Lead forms use Zod validation and persist to the database. JWT cookie authentication protects admin pages.
