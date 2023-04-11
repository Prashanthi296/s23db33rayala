const mongoose = require("mongoose");
const cinemaSchema = mongoose.Schema({
  cinema_Name: String,
  cinema_genre: String,
  cinema_parts: Number,
});
module.exports = mongoose.model("Cinema", cinemaSchema);
