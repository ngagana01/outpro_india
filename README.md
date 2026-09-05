# Outpro.India Final Major Project

Full-stack Next.js corporate platform foundation with responsive public website, Prisma database, lead capture API, admin authentication/dashboard, and CMS-ready models for services, projects, testimonials, team, blog, careers and partners.

## Windows setup
1. Extract the ZIP. Open the folder containing package.json.
2. Copy `.env.example` to `.env`.
3. If PowerShell blocks npm, run: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
4. Run: `npm install`
5. Run: `npx prisma generate`
6. Run: `npx prisma db push`
7. Run: `node prisma/seed.js`
8. Run: `npm run dev`
9. Visit http://localhost:3000




