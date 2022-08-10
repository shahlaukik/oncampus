// Importing mongoose
const mongoose = require("mongoose");

// Possible years
const Years = ["2017", "2018", "2019", "2020", "2021"];

// Possible Batches
const Batch = ["BCS", "IMG", "IMT"];

// Possible Hostels
const Hostels = ["BH-1", "BH-2", "BH-3", "GH"];

// User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: String,
        enum: Years,
        required: true,
    },
    roll_number: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        enum: Batch,
        required: true,
    },
    hostel: {
        type: String,
        enum: Hostels,
        required: true,
    },
    room_number: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        length: 10,
    },
    profile_picture: {
        type: String,
        default: process.env.default_profile_picture,
    },
    auth_token: {
        type: String,
        default: "",
    },
    push_notification_token: {
        type: String,
        default: "",
    },
    send_push_notification: {
        type: Boolean,
        default: true,
    },
    password: {
        type: String,
        required: true,
    },
    email_verified: {
        type: Boolean,
        default: false,
    },
});

// Exports
exports.userSchema = userSchema;
exports.Years = Years;
exports.Batch = Batch;
exports.Hostels = Hostels;
