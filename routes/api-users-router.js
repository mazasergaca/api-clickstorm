const express = require("express");
const { asyncWrapper } = require("../helpers/api-helpers");
const {
  registrationController,
  loginController,
  getCurrentUserInfoController,
  updateUserController,
} = require("../controllers/api-users-controllers");
const { userMiddlewar } = require("../middlewares/user-middlewar");

const router = express.Router();
// registration new user
router.post("/registration", asyncWrapper(registrationController));
// login user
router.post("/login", asyncWrapper(loginController));

router.use(userMiddlewar);

// get user
router.get("/current", asyncWrapper(getCurrentUserInfoController));
// update user
router.put("/update", asyncWrapper(updateUserController));

module.exports = router;
