import { WebSocket, WebSocketServer } from "ws";
import { Server } from "http";

interface DrawMessage {
    type: "draw";  // Helps Typescript discriminate between different types of union
    data: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
          
    };
}

export class WebSocketManager {
  private wss: WebSocketServer;
  private clients: Set<WebSocket> = new Set();

  constructor(server: Server) {
    this.wss = new WebSocketServer({ server });
    console.log("WebSocket server started");
  }

  // listen() sets up a listener for when a new WebSocket client connects.
  // When someone connects, you pass their ws (WebSocket object) to handleConnection().
  public listen() {
    this.wss.on("connection", (ws: WebSocket) => {
      this.handleConnection(ws);
    });
  }

  //Logs the new connection.
  //Adds the new client to the clients set.
  public handleConnection(ws: WebSocket) {
    console.log("[WebSocketManager]: New client connected");
    this.clients.add(ws);

    ws.on("message", (message: string) => {
      this.handleMessage(ws, message);
    });

    ws.on("close", () => {
      this.handleClose(ws);
    });

    ws.on("error", (error) => {
      console.error("[WebSocketManager]: WebSocket error:", error);
      this.handleClose(ws);
    });
  }

  private handleMessage(sender: WebSocket, message: string) {
    console.log(`[WebSocketManager]: Message from client: ${message}`);
    this.broadcast(message, sender);
  }

  private handleClose(ws: WebSocket) {
    console.log("[WebSocketManager]: Client disconnected.");
    this.clients.delete(ws);
  }

  // Broadcast a message to all connected clients except the one who sent it
  private broadcast(message: string, sender: WebSocket) {
    this.clients.forEach((client) => {
      if (client !== sender && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }
}