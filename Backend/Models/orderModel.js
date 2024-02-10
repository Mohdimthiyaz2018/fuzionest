const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter the name"]
    },
    description: {
        type: String,
        required: [true,"Please enter the description"]
    },
    quantity: {
        type: Number,
        required: [true, "Please enter the quantity"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const orderModel = mongoose.model('mohamed-orderRecords', orderSchema);

module.exports = orderModel;