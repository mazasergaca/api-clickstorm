const express = require("express");
const {
  registrationController,
  loginController,
  getCurrentUserInfoController,
  updateUserController,
} = require("../controllers/api-users-controllers");
const { userMiddlewar } = require("../middlewares/user-middlewar");

const router = express.Router();
// registration new user
router.post("/registration", registrationController);
// login user
router.post("/login", loginController);

router.use(userMiddlewar);

// get user
router.get("/current", getCurrentUserInfoController);
// update user
router.put("/update", updateUserController);

module.exports = router;
