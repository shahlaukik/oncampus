// Importing mongoose
const mongoose = require("mongoose");
mongoose.pluralize(null);

// Importing schema
const { feedbackSchema } = require("../schemas/Feedback");

// feedback model
const feedback = mongoose.model("feedback", feedbackSchema);

// Exporting the feedback model
exports.feedback = feedback;
