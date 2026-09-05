@echo off
call npm install
call npx prisma generate
call npx prisma db push
call node prisma/seed.js
call npm run dev
