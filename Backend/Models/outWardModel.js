const mongoose = require("mongoose");

const outwardSchema = new mongoose.Schema({
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
    required: [true, "Please select the type"],
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const outWardModel = mongoose.model('mohamed-outwards',outwardSchema);

module.exports = outWardModel;
