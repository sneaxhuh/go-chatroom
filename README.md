# Go Chatroom

A real-time chat application built with Go (backend) and React (frontend) using WebSockets for communication.

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [WebSocket Communication](#websocket-communication)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time messaging using WebSockets
- Multiple user support
- Notification when users join or leave
- Simple and clean UI
- Responsive design

## Architecture

The application follows a client-server architecture:

- **Backend**: Written in Go, handles WebSocket connections, message broadcasting, and user management
- **Frontend**: Built with React, provides the user interface and connects to the WebSocket server
- **Communication**: Real-time communication via WebSockets

## Prerequisites

- Go 1.20 or higher
- Node.js 14 or higher
- npm 6 or higher

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/go-chatroom.git
   cd go-chatroom
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   go mod tidy
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   go run main.go
   ```
   The server will start on port 9000.

2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```
   The frontend will start on port 3000 and automatically open in your browser.

## Project Structure

```
go-chatroom/
├── backend/
│   ├── go.mod
│   ├── go.sum
│   ├── main.go
│   └── websocket/
│       ├── client.go
│       ├── pool.go
│       └── websocket.go
└── frontend/
    ├── package.json
    ├── src/
    │   ├── App.js
    │   ├── api/
    │   │   └── index.js
    │   ├── components/
    │   │   ├── ChatHistory.js
    │   │   ├── ChatInput.js
    │   │   └── Header.js
    │   └── ...
    └── ...
```

### Backend

- `main.go`: Entry point of the application, sets up routes and starts the server
- `websocket/client.go`: Defines the Client struct and handles reading messages from clients
- `websocket/pool.go`: Manages client connections and message broadcasting
- `websocket/websocket.go`: Handles WebSocket connection upgrades

### Frontend

- `src/App.js`: Main application component that manages chat history state
- `src/api/index.js`: Handles WebSocket connection and message sending
- `src/components/`: Contains UI components (Header, ChatInput, ChatHistory)

## API Endpoints

- `GET /ws`: WebSocket endpoint for real-time communication

## WebSocket Communication

The application uses WebSockets for real-time communication between clients and the server:

1. Clients connect to the WebSocket endpoint (`ws://localhost:9000/ws`)
2. When a new client connects, the server broadcasts a "New User Joined" message
3. When a client sends a message, the server broadcasts it to all connected clients
4. When a client disconnects, the server broadcasts a "User Disconnected" message

Messages are sent as JSON objects with the following structure:
```json
{
  "type": 1,
  "body": "message content"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details if it exists.