const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    accountNumber: Number,
    firstName: String,
    lastName: String,
    role: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    balance: Number,
    createdAt: {
        type: Date,
    },
});
const User = mongoose.model("User", userSchema);

const transactionSchema = new mongoose.Schema({
    accountNumber: Number,
    type: String,
    amount: Number,
    timestamp: {
        type: Date,
    },
    newBalance: Number,
});
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = {};
