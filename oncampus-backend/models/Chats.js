// Importing mongoose
const mongoose = require("mongoose");
mongoose.pluralize(null);

// Importing schema
const { chatsSchema } = require("../schemas/Chats");

// chats model
const chats = mongoose.model("Chats", chatsSchema);

// Exporting the chats model
exports.chats = chats;
