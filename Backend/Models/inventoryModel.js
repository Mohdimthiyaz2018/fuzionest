const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  from: {
    type: String,
    required: [true, "Please enter the name"],
  },
  description: {
    type: String,
    required: [true, "Please enter the description"],
  },
  box: {
    type: Number,
    required: [true, "Please enter How many boxes"],
  },
  type: {
    type: String,
    required: [true, "Please select the type"]
  },
  items: [{
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const inventoryModel = mongoose.model("mohamed-inventorys", inventorySchema);

module.exports = inventoryModel;
