const User = require("../models/user-model");

const getAllUsers = async (req, res) => {
  const users = await User.find({});

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  return res.status(200).json(user);
};

const createUser = async (req, res) => {
  const user = await User.create(req.body);

  return res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(id, { ...req.body }, { new: true });

  return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  return res.status(200).json(user);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
