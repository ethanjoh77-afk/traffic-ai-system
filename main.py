from fastapi import FastAPI, WebSocket
import asyncio
import random

app = FastAPI()

# =========================
# MOCK DATA
# =========================
CAMERAS = [
    "ubungo",
    "kariakoo",
    "posta"
]


# =========================
# HOME ROUTE
# =========================
@app.get("/")
def home():
    return {
        "status": "running",
        "message": "Traffic AI Backend Live"
    }


# =========================
# HEALTH CHECK
# =========================
@app.get("/health")
def health():
    return {
        "ok": True
    }


# =========================
# WEBSOCKET
# =========================
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    while True:

        fusion = {}
        total_vehicles = 0

        # generate fake traffic data
        for cam in CAMERAS:
            count = random.randint(1, 15)

            fusion[cam] = count
            total_vehicles += count

        congestion = (
            "red" if total_vehicles > 25 else
            "yellow" if total_vehicles > 12 else
            "green"
        )

        accident = total_vehicles > 30

        await websocket.send_json({
            "zones": fusion,
            "vehicles": total_vehicles,
            "congestion": congestion,
            "accident": accident
        })

        await asyncio.sleep(1)