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
  type: {
    totalGames: {
      name: {
        type: String,
        default: "Total games",
      },
      value: {
        type: Number,
        default: 0,
      },
      levels: [
        {
          value: {
            type: Number,
            default: 1,
          },
          points: {
            type: Number,
            default: 5,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 10,
          },
          points: {
            type: Number,
            default: 15,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 25,
          },
          points: {
            type: Number,
            default: 20,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 50,
          },
          points: {
            type: Number,
            default: 25,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 100,
          },
          points: {
            type: Number,
            default: 50,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 250,
          },
          points: {
            type: Number,
            default: 100,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 1000,
          },
          points: {
            type: Number,
            default: 250,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
      ],
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
      levels: [
        {
          value: {
            type: Number,
            default: 10,
          },
          points: {
            type: Number,
            default: 5,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 100,
          },
          points: {
            type: Number,
            default: 15,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 500,
          },
          points: {
            type: Number,
            default: 20,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 1000,
          },
          points: {
            type: Number,
            default: 25,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 2500,
          },
          points: {
            type: Number,
            default: 50,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 5000,
          },
          points: {
            type: Number,
            default: 100,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 10000,
          },
          points: {
            type: Number,
            default: 250,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
    record: {
      name: {
        type: String,
        default: "Points record",
      },
      value: {
        type: Number,
        default: 0,
      },
      levels: [
        {
          value: {
            type: Number,
            default: 5,
          },
          points: {
            type: Number,
            default: 5,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 15,
          },
          points: {
            type: Number,
            default: 15,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 25,
          },
          points: {
            type: Number,
            default: 20,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 40,
          },
          points: {
            type: Number,
            default: 25,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 70,
          },
          points: {
            type: Number,
            default: 50,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 100,
          },
          points: {
            type: Number,
            default: 100,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
        {
          value: {
            type: Number,
            default: 250,
          },
          points: {
            type: Number,
            default: 250,
          },
          reseived: {
            type: Boolean,
            default: false,
          },
        },
      ],
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
