import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

/* =========================
   LIVE SOCKET CONNECTION
========================= */

io.on("connection", (socket) => {

  console.log("Client Connected");

  setInterval(() => {

    socket.emit("live-stats", {

      vehicles:
        Math.floor(
          180000 + Math.random() * 10000
        ),

      speed:
        Math.floor(
          30 + Math.random() * 20
        ),

      density:
        Math.floor(
          50 + Math.random() * 50
        ),

      incidents:
        Math.floor(
          5 + Math.random() * 10
        ),

      camerasOnline:
        Math.floor(
          240 + Math.random() * 38
        ),

      totalCameras: 278,

      responseUnits:
        Math.floor(
          10 + Math.random() * 15
        ),

    });

  }, 3000);

  socket.on("disconnect", () => {
    console.log("Client Disconnected");
  });

});

/* =========================
   API TEST
========================= */

app.get("/", (req, res) => {

  res.send(
    "Traffic AI Backend Running"
  );

});

/* =========================
   SERVER START
========================= */

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});