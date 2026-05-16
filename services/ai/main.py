from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="ServicesHub AI Service")

class NLPTaggingRequest(BaseModel):
    text: str

class MatchProvidersRequest(BaseModel):
    category: str
    distance_km: float
    rating: float = 4.0

class PriceEstimateRequest(BaseModel):
    category: str
    urgency: str = "normal"
    hours: float = 1.0

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/ai/nlp-tagging")
def nlp_tagging(payload: NLPTaggingRequest):
    lowered = payload.text.lower()
    tags = []
    for token in ["urgent", "leak", "electric", "clean", "ac", "paint", "delivery"]:
        if token in lowered:
            tags.append(token)
    if not tags:
        tags = ["general"]
    return {"tags": tags}

@app.post("/ai/match-providers")
def match_providers(payload: MatchProvidersRequest):
    score = max(0, (5 - payload.distance_km) * 10) + (payload.rating * 12)
    return {
        "category": payload.category,
        "score": round(score, 2),
        "rule": "closer distance and higher rating produce better score"
    }

@app.post("/ai/price-estimate")
def price_estimate(payload: PriceEstimateRequest):
    base = {
        "Electrician": 20,
        "Mechanic": 25,
        "Plumber": 22,
        "AC Repair": 30,
        "Cleaning": 15,
        "Carpenter": 24,
        "Painter": 18,
        "Rider / Delivery": 10,
    }.get(payload.category, 20)
    urgency_multiplier = 1.35 if payload.urgency.lower() == "urgent" else 1.0
    estimate = base * payload.hours * urgency_multiplier
    return {"currency": "USD", "estimate": round(estimate, 2)}
