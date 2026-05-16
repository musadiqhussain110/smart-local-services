# ServicesHub AI Service

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload --port 8000
```

## Endpoints
- `POST /ai/nlp-tagging`
- `POST /ai/match-providers`
- `POST /ai/price-estimate`
