from fastapi import FastAPI, WebSocket
import asyncio
import random

app = FastAPI()

CAMERAS = [
    "ubungo",
    "kariakoo",
    "posta"
]


@app.get("/")
def home():
    return {
        "status": "running",
        "message": "Traffic AI Backend Live"
    }


@app.get("/health")
def health():
    return {"ok": True}


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    try:
        while True:

            fusion = {}
            total_vehicles = 0

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

    except Exception:
        # prevents crash on disconnect
        pass