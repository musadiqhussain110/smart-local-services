# ServicesHub

**Local services at your doorstep**

ServicesHub is a pnpm-workspace monorepo with web, mobile, API, AI, and shared packages.

## Monorepo structure

```text
apps/
  web/
  mobile/
services/
  api/
  ai/
packages/
  shared/
infra/
  docker/
docs/
```

## Prerequisites

- Node.js 20+
- pnpm 9+
- Python 3.11+
- Docker + Docker Compose

## Install

```bash
pnpm install
```

## Run locally

### Web + API concurrently

```bash
pnpm dev
```

### Mobile (Expo)

```bash
pnpm --filter @serviceshub/mobile dev
```

### AI service

```bash
cd services/ai
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Docker stack (mongo + api + ai)

```bash
pnpm docker:up
pnpm docker:down
```

## Service URLs

- Web: http://localhost:5173
- API: http://localhost:4000
- AI: http://localhost:8000
- MongoDB: mongodb://localhost:27017/serviceshub

## Notes

- Web map uses OpenStreetMap via Leaflet/react-leaflet.
- Mobile map uses `react-native-maps` and documents OSM tile usage/fallback in `apps/mobile/README.md`.
- Default categories: Electrician, Mechanic, Plumber, AC Repair, Cleaning, Carpenter, Painter, Rider / Delivery.
