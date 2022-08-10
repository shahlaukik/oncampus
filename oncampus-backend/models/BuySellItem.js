// Importing mongoose
const mongoose = require("mongoose");
mongoose.pluralize(null);

// Importing schema
const { buySellItemSchema } = require("../schemas/BuySellItem");

// buySellItems model
const buySellItems = mongoose.model("BuySellItems", buySellItemSchema);

// Exporting the buySellItems model
exports.buySellItems = buySellItems;
