const WebSocket = require('ws');
const http = require('http');

// Create HTTP server (required by Render)
const server = http.createServer((req, res) => {
  res.end("WebSocket server is running");
});

// Use port from environment variable or default 3000
const port = process.env.PORT || 3000;

// Create WebSocket server attached to HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log("🧩 New client connected");

  ws.on('message', (message) => {
    console.log("📩 Received:", message);
    // Echo the message back
    ws.send(`Server received: ${message}`);
  });

  ws.on('close', () => {
    console.log("❌ Client disconnected");
  });
});

// Start server
server.listen(port, () => {
  console.log(`✅ Server listening on port ${port}`);
});
