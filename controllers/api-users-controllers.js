const {
  registration,
  login,
  getCurrentUserInfo,
  updateUser,
} = require("../services/api-users-service");

const registrationController = async (req, res) => {
  const { username, password } = req.body;

  await registration(username, password);

  return res.status(200).json({ message: "success" });
};

const loginController = async (req, res) => {
  const { username, password } = req.body;

  const token = await login(username, password);

  return res.status(200).json({ message: "success", token });
};

const getCurrentUserInfoController = async (req, res) => {
  const { _id } = req.user;
  const user = await getCurrentUserInfo(_id);

  res.status(200).json(user);
};

const updateUserController = async (req, res) => {
  const { _id } = req.user;

  const user = await updateUser(_id, req.body);

  return res.status(200).json(user);
};

module.exports = {
  registrationController,
  loginController,
  getCurrentUserInfoController,
  updateUserController,
};
