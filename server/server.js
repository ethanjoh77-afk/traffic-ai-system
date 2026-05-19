const express = require("express");

const http = require("http");

const cors = require("cors");

const { Server } = require("socket.io");

const app = express();

app.use(cors());

const server = http.createServer(app);

/* SOCKET SERVER */

const io = new Server(server, {

  cors: {
    origin: "*",
  },

});

/* TEST ROUTE */

app.get("/", (req, res) => {

  res.send("TRAFFIC AI BACKEND RUNNING");

});

/* SOCKET CONNECTION */

io.on("connection", (socket) => {

  console.log("CLIENT CONNECTED");

  socket.emit("connected", {

    status: "online",

  });

});

/* LIVE DATA */

setInterval(() => {

  const liveData = {

    vehicles:
      Math.floor(
        180000 + Math.random() * 50000
      ),

    speed:
      Math.floor(
        20 + Math.random() * 60
      ),

    density:
      Math.floor(
        40 + Math.random() * 60
      ),

    incidents:
      Math.floor(
        Math.random() * 15
      ),

    camerasOnline:
      Math.floor(
        240 + Math.random() * 38
      ),

    totalCameras: 278,

    responseUnits:
      Math.floor(
        10 + Math.random() * 20
      ),

  };

  io.emit(
    "live-stats",
    liveData
  );

}, 2000);

/* PORT */

const PORT =
  process.env.PORT || 5000;

server.listen(PORT, () => {

  console.log(
    `SERVER RUNNING ON ${PORT}`
  );

});