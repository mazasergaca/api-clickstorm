const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  coins: {
    type: Number,
    default: 0,
  },
  achievementPoints: {
    type: Number,
    default: 0,
  },
  skills: {
    pinkstorm: {
      type: Number,
      default: 0,
    },
    bluestorm: {
      type: Number,
      default: 0,
    },
    yellowstorm: {
      type: Number,
      default: 0,
    },
  },
  achievements: {
    totalGames: {
      name: {
        type: String,
        default: "Total games",
      },
      value: {
        type: Number,
        default: 0,
      },
      levels: {
        type: Array,
        default: [
          { value: 1, points: 5, reseived: false },
          { value: 10, points: 15, reseived: false },
          { value: 25, points: 20, reseived: false },
          { value: 50, points: 25, reseived: false },
          { value: 100, points: 50, reseived: false },
          { value: 250, points: 100, reseived: false },
          { value: 1000, points: 250, reseived: false },
        ],
      },
    },
    totalCoins: {
      name: {
        type: String,
        default: "Total coins",
      },
      value: {
        type: Number,
        default: 0,
      },
      levels: {
        type: Array,
        default: [
          { value: 10, points: 5, reseived: false },
          { value: 100, points: 15, reseived: false },
          { value: 500, points: 20, reseived: false },
          { value: 1000, points: 25, reseived: false },
          { value: 2500, points: 50, reseived: false },
          { value: 5000, points: 100, reseived: false },
          { value: 10000, points: 250, reseived: false },
        ],
      },
    },
    recordScore: {
      name: {
        type: String,
        default: "Record",
      },
      value: {
        type: Number,
        default: 0,
      },
      levels: {
        type: Array,
        default: [
          { value: 5, points: 5, reseived: false },
          { value: 15, points: 15, reseived: false },
          { value: 25, points: 20, reseived: false },
          { value: 40, points: 25, reseived: false },
          { value: 70, points: 50, reseived: false },
          { value: 100, points: 100, reseived: false },
          { value: 250, points: 250, reseived: false },
        ],
      },
    },
  },
});

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
