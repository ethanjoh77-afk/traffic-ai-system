from flask import Flask, Response
from flask_socketio import SocketIO
from ultralytics import YOLO

import cv2
import time

app = Flask(__name__)

socketio = SocketIO(
    app,
    cors_allowed_origins="*"
)

# LOAD YOLO MODEL
model = YOLO("yolov8n.pt")

# CAMERA
camera = cv2.VideoCapture(0)

# OPTIONAL:
# camera = cv2.VideoCapture("traffic.mp4")

def generate_frames():

    while True:

        success, frame = camera.read()

        if not success:
            break

        # ROTATE CAMERA IF SIDEWAYS
        frame = cv2.rotate(
            frame,
            cv2.ROTATE_90_COUNTERCLOCKWISE
        )

        # YOLO DETECTION
        results = model(frame)

        # COUNTS
        car_count = 0
        truck_count = 0
        bus_count = 0

        for box in results[0].boxes:

            cls = int(box.cls[0])

            label = model.names[cls]

            if label == "car":
                car_count += 1

            elif label == "truck":
                truck_count += 1

            elif label == "bus":
                bus_count += 1

        total_vehicles = (
            car_count +
            truck_count +
            bus_count
        )

        # SEND LIVE STATS
        socketio.emit(
            "live-stats",
            {
                "vehicles": total_vehicles,
                "cars": car_count,
                "trucks": truck_count,
                "buses": bus_count,
                "speed": 34,
                "density": 72,
                "incidents": 2,
                "camerasOnline": 256,
                "totalCameras": 278,
                "responseUnits": 18,
            }
        )

        # DRAW YOLO BOXES
        annotated_frame = results[0].plot()

        # ENCODE FRAME
        ret, buffer = cv2.imencode(
            ".jpg",
            annotated_frame
        )

        frame_bytes = buffer.tobytes()

        yield (
            b"--frame\r\n"
            b"Content-Type: image/jpeg\r\n\r\n"
            + frame_bytes +
            b"\r\n"
        )

@app.route("/video_feed")

def video_feed():

    return Response(
        generate_frames(),
        mimetype=(
            "multipart/x-mixed-replace;"
            " boundary=frame"
        )
    )

if __name__ == "__main__":

    socketio.run(
        app,
        host="0.0.0.0",
        port=5000
    )