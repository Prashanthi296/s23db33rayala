const mongoose = require("mongoose");
const cinemaSchema = mongoose.Schema({
  cinema_Name: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, "Name of the Cinema is not valid"],
  },
  cinema_genre: {
    type: String,
    required: true,
    minLength: [0, "Location of the Cinema is not valid"],
  },
  cinema_parts: {
    type: Number,
    required: true,
    min: [0, "Variants of the Cinema is not valid"],
  },
});
module.exports = mongoose.model("Cinema", cinemaSchema);
