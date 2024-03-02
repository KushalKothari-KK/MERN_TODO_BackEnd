const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
} = require("../controllers/users");
const { isAuthentication } = require("../middlewares/auth");
const router = express.Router();

router.post("/new", registerUser);

router.post("/login", loginUser);
router.get("/logout", logoutUser);

router.get("/my", isAuthentication, getUserInfo);

module.exports = router;
