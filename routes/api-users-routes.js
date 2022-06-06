const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/api-users-controllers");

const router = express.Router();

//get all users
router.get("/", getAllUsers);
// get user by id
router.get("/:id", getUserById);
// add new user
router.post("/", createUser);
// update user
router.put("/:id", updateUser);
// delete user
router.delete("/:id", deleteUser);

module.exports = router;
