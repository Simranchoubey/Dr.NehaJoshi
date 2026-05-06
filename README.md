# Dr. Neha Joshi — Dermatology Clinic Website

This is a Next.js (App Router) project built for a premium dermatology clinic website.

Features:
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Razorpay integration (order creation + client-side payment)
- MongoDB storage for leads/bookings
- SEO essentials (meta, sitemap, robots)

Environment variables (set in `.env.local`):
- MONGODB_URI - MongoDB connection string
- MONGODB_DB - optional DB name (default: clinic)
- RAZORPAY_KEY_ID - Razorpay key id
- RAZORPAY_SECRET - Razorpay secret
- NEXT_PUBLIC_RAZORPAY_KEY - client key id

Quick start:
1. Install dependencies: npm install
2. Create `.env.local` with required vars
3. Run dev: npm run dev

Deployment:
- Deploy to Vercel and set the environment variables in the Vercel dashboard.

Notes:
- Replace placeholder images in `public/` with optimized images and add alt text.
- Replace Google Analytics ID in `app/layout.js`.
