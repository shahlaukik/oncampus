// Importing mongoose
const mongoose = require("mongoose");
mongoose.pluralize(null);

// Importing schema
const { otpSchema } = require("../schemas/OTP");

// OTP model
const OTP = mongoose.model("otp", otpSchema);

// Exporting the OTP model
exports.OTP = OTP;
