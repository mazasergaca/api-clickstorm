const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  coins: {
    type: Number,
    default: 0,
  },
  achievementPoints: {
    all: {
      type: Number,
      default: 1395,
    },
    has: {
      type: Number,
      default: 0,
    },
  },
  volume: {
    type: Number,
    min: 0,
    max: 1,
    default: 0.3,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
