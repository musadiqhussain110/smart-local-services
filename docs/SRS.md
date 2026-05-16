# ServicesHub SRS (Concise)

## Brand & UX
- Brand: ServicesHub
- Tagline: Local services at your doorstep
- Theme: Dark glassmorphism with blue (#2563EB) and green (#22C55E) accents

## Core modules
- Web app (React + Vite + Tailwind + shadcn/ui style primitives)
- Mobile app (Expo)
- API (Node.js, Express, MongoDB, Socket.IO)
- AI service (FastAPI)
- Shared package (constants and JSDoc typedefs)

## Required capabilities
- Auth (register/login/refresh)
- RBAC (admin, customer, provider)
- Categories and provider onboarding
- Nearby provider query via GeoJSON + 2dsphere
- Booking creation and status updates
- Socket events: `booking:status_update`, `provider:location_update`
- AI endpoints: nlp-tagging, match-providers, price-estimate
