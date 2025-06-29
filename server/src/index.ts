// backend/src/index.ts
import express, { Express, Request, Response } from "express";
import cors from "cors";
import http from "http"; // Import the 'http' module
import { WebSocketManager } from "./WebSocketManager"; // Import our new class

const app: Express = express();
const PORT: number = 3001;

// Create a standard HTTP server from our Express app
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", message: "Backend is running!" });
});

// Initialize and start the WebSocket manager
const wsManager = new WebSocketManager(server);
wsManager.listen();

// Start the HTTP server instead of the Express app
server.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
