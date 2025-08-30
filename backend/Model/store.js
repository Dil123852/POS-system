const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  location: {
    type: String,
    trim: true,
    default: ''
  },
  lastUpdatedAt: {
    type: Date,
    default: Date.now
  },
  lowStockAlert: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("store", storeSchema);