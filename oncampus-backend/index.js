// Importing packages
const express = require("express");
const mongoose = require("mongoose");
const favicon = require("serve-favicon");
const path = require("path");
var cors = require('cors')
require("dotenv").config();

// Importing utility
const { CreateIndexes } = require("./utils/ModelIndexes");

// Routes imports
const BuySellItem = require("./routes/BuySellItem");
const Chats = require("./routes/Chats");
const Feedbacks = require("./routes/Feedback");
const OTP = require("./routes/OTP");
const LostFoundItems = require("./routes/LostFoundItems");
const RaisedHands = require("./routes/RaisedHands");
const Requirements = require("./routes/Requirements");
const User = require("./routes/Users");

// Connect to MongoDB
mongoose
    .connect(process.env.db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Connected to MongoDB...`);
        CreateIndexes();
    })
    .catch((error) =>
        console.error("Server Error. Please try again later.", error)
    );

// Express app initialization
const app = express();

// Configuring Express to use static files
app.use(express.static(path.join(__dirname, "/public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use(cors());

// Encoding url
app.use(express.urlencoded({ extended: true }));

// Intiating morgan if not in production
if (process.env.NODE_ENV !== "production") {
    const morgan = require("morgan");
    app.use(morgan("dev"));
}

// Socket setup
const http = require("http");
// Wrapping Express app with Socket.io
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
} = require("./utils/Socket");


// Socket listeners
io.on("connection", (socket) => {
    socket.on("joinRoom", ({ username, room }) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);
        io.to(user.room).emit("roomUsers", {
            room: user.room,
            users: getRoomUsers(user.room),
        });
    });

    socket.on("chatMessage", (msg) => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit("message", msg);
    });

    socket.on("type-update", (msg) => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit("type-update-emitter", msg);
    });

    socket.on("disconnect", () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit("roomUsers", {
                room: user.room,
                users: getRoomUsers(user.room),
            });
        }
    });
});

// Add routes
app.use("/buy-sell-items", BuySellItem);
app.use("/chats", Chats);
app.use("/feedback", Feedbacks);
app.use("/otp", OTP);
app.use("/lost-found-items", LostFoundItems);
app.use("/raisedhands", RaisedHands);
app.use("/raisedhands", Requirements);
app.use("/auth", User);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname + "/views/404.html"));
});

// Server listening on port
const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Serving on port ${port}`));
