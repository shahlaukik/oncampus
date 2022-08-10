// Importing mongoose
const mongoose = require("mongoose");
mongoose.pluralize(null);

// Importing schema
const { lostFoundSchema } = require("../schemas/LostFoundItem");

// lostFoundItems model
const lostFoundItems = mongoose.model("LostFoundItems", lostFoundSchema);

// Exporting the lostFoundItems model
exports.lostFoundItems = lostFoundItems;
