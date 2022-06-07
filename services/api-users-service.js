const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const { NotAuthorizedError } = require("../helpers/errors");

const registration = async (username, password) => {
  const user = new User({ username, password });
  await user.save();
};

const login = async (username, password) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw new NotAuthorizedError(`No user with username "${username}" found`);
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError("Wrong password");
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  return token;
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});

  return res.status(200).json(users);
};

module.exports = {
  registration,
  login,
};
