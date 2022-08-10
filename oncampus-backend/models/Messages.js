// Importing mongoose
const mongoose = require("mongoose");
mongoose.pluralize(null);

// Importing schema
const { messagesSchema } = require("../schemas/Messages");

// Messages model
const messages = mongoose.model("Messages", messagesSchema);

// Exporting the Messages model
exports.messages = messages;
