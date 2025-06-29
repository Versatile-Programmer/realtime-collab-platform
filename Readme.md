# Real-time Collaborative Platform

This project is a web application where multiple users can simultaneously draw on a shared whiteboard or edit text in real-time. It is built with a modern, scalable backend architecture to showcase skills in real-time communication, event-driven systems, and DevOps, with a focus on type-safety and Object-Oriented principles.

## Core Problem
Handling concurrent updates, synchronizing state across multiple clients, and ensuring low latency in a distributed environment.

## Tech Stack

*   **Language:** TypeScript
*   **Frontend:** Vite, React, Tailwind CSS
*   **Backend:** Node.js, Express.js
*   **Real-time Communication:** WebSockets (initially)
*   **Event-Driven Backbone:** Apache Kafka (planned)
*   **Inter-Service Communication:** gRPC (planned)
*   **State & Caching:** Redis (planned)
*   **Database:** PostgreSQL (planned)
*   **DevOps:** Docker, Kubernetes, GitHub Actions, Prometheus, Grafana (planned)

## Getting Started

This project is a monorepo containing a separate `frontend` and `backend`.

### Prerequisites

*   Node.js (v16 or later)
*   npm

### Running the Backend

1.  Navigate to the backend directory:
    ```sh
    cd backend
    ```
2.  Install dependencies:
    ```sh
    npm install
    ```
3.  Start the development server (with auto-reloading):
    ```sh
    npm run dev
    ```
    The backend will be running on `http://localhost:3001`.

### Running the Frontend

1.  In a new terminal, navigate to the frontend directory:
    ```sh
    cd frontend
    ```
2.  Install dependencies:
    ```sh
    npm install
    ```
3.  Start the development server:
    ```sh
    npm run dev
    ```
    The React app will open and run on `http://localhost:5173` 