// Packages imports
const mongoose = require("mongoose");

// 10 minutes
const TIME_LIMIT = 600;

// ResetPassword schema
const resetPasswordSchema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now,
        required: true,
        expires: TIME_LIMIT,
    },
});

// Exporting the ResetPassword schema
exports.resetPasswordSchema = resetPasswordSchema;
