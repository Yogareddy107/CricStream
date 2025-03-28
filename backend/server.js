const express = require("express");
const cors = require("cors");
const axios = require("axios");
const WebSocket = require("ws");

const app = express();
app.use(cors());

const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    console.log("Client connected");

    const sendLiveScore = async () => {
        try {
            const response = await axios.get("https://your-api-for-live-scores.com");
            ws.send(JSON.stringify(response.data));
        } catch (error) {
            console.error("Error fetching live scores:", error);
        }
    };

    sendLiveScore();
    setInterval(sendLiveScore, 10000); // Fetch every 10 seconds
});

server.listen(5000, () => console.log("Server running on port 5000"));
