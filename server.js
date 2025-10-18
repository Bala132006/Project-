const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve frontend files from /public
app.use(express.static("public"));

// WebSocket events
io.on("connection", (socket) => {
  console.log("✅ A user connected");

  // Listen for chat messages
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // broadcast to everyone
  });

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("❌ A user disconnected");
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

