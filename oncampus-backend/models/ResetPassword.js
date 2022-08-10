// Importing mongoose
const mongoose = require("mongoose");
mongoose.pluralize(null);

// Importing schema
const { resetPasswordSchema } = require("../schemas/ResetPassword");

// resetRequests Model
const resetRequests = mongoose.model("resetrequests", resetPasswordSchema);

// Exporting the resetRequests model
exports.resetRequests = resetRequests;
