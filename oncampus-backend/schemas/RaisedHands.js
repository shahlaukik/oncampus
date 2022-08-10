// Importing mongoose
const mongoose = require("mongoose");

// Requirement schema
const raisedHandsSchema = new mongoose.Schema({
    note: {
        type: String,
        default: "",
    },
    product_id: {
        type: mongoose.Schema.ObjectId,
        ref: "products",
        required: true,
    },
    product_owner_id: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        required: true,
    },
    raised_by: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        required: true,
    },
    raised_datetime: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

// Exporting the Requirement schema
exports.raisedHandsSchema = raisedHandsSchema;
