const express = require("express");
const {
  registrationController,
  loginController,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/api-users-controllers");

const router = express.Router();

//registration new user
router.post("/registration", registrationController);
// login user
router.post("/login", loginController);
//get all users
router.get("/", getAllUsers);
// get user by id
router.get("/:id", getUserById);
// update user
router.put("/:id", updateUser);
// delete user
router.delete("/:id", deleteUser);

module.exports = router;
