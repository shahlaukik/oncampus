// Importing mongoose
const mongoose = require("mongoose");
mongoose.pluralize(null);

// Importing schema
const { raisedHandsSchema } = require("../schemas/RaisedHands");

// Product model
const raisedHands = mongoose.model("RaisedHands", raisedHandsSchema);

// Exporting the Product model
exports.raisedHands = raisedHands;
