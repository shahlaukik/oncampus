// Importing mongoose
const mongoose = require("mongoose");

// Chats schema
const chatsSchema = new mongoose.Schema({
    participants: {
        type: [mongoose.Schema.ObjectId],
        required: true,
    },
    last_message: {
        type: Object,
        default: null,
    },
    last_modified: {
        type: Date,
        default: Date.now,
    },
});

// Exporting the Chats schema
exports.chatsSchema = chatsSchema;
