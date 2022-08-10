// Importing mongoose
const mongoose = require("mongoose");
mongoose.pluralize(null);

// Importing schema
const { requirementSchema } = require("../schemas/Requirements");

// Product model
const requirements = mongoose.model("Requirement", requirementSchema);

// Exporting the Product model
exports.requirements = requirements;
