const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  salePrice: {
    type: Number,
    required: true,
    min: 0,
  },
  buyPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isAvailable:{ 
     type:Boolean,
     required: true,
    trim: true,
  }
});

module.exports = mongoose.model("item", itemSchema);