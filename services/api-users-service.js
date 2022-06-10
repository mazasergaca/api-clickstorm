const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const { NotAuthorizedError } = require("../helpers/errors");

const registration = async (username, password) => {
  const user = new User({ username, password });
  await user.save();
};

const login = async (username, password) => {
  const user = await User.findOne({ username, confirmed: true });

  if (!user) {
    throw new NotAuthorizedError(`No user with username "${username}" found`);
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError("Wrong password");
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  return token;
};

const getCurrentUserInfo = async (_id) => {
  const user = await User.findOne({ _id }, { __v: 0, password: 0 });
  return user;
};

const updateUser = async (_id, body) => {
  const user = await User.findByIdAndUpdate(_id, { ...body }, { new: true });

  return user;
};

module.exports = {
  registration,
  login,
  getCurrentUserInfo,
  updateUser,
};
