const mongoose = require("mongoose");

const InventoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: "default.png",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("inventories", InventoriesSchema);
