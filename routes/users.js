const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
} = require("../controllers/users");
const router = express.Router();

router.post("/new", registerUser);

router.post("/login", loginUser);
router.get("/logout", logoutUser);

router.get("/my", getUserInfo);

module.exports = router;
