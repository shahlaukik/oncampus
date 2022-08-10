// Importing mongoose
const mongoose = require("mongoose");
mongoose.pluralize(null);

// Importing schema
const { userSchema } = require("../schemas/Users");

// Create model
const users = mongoose.model("users", userSchema);

// Exporting the users model
exports.users = users;
