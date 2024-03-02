const bcrypt = require("bcrypt");
const User = require("../models/user");
const { ErrorHandler } = require("../middlewares/error");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return next(new ErrorHandler("User Already Exist", 404));
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });
    // need to add cookie logic and remove below code
    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
    });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email }).select("+password");
    if (!user)
      return next(new ErrorHandler("Invalid username or password", 404));
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched)
      return next(new ErrorHandler("Invalid username or password", 404));
    res.status(200).json({
      success: true,
      message: "Login Successfully",
    });
  } catch (err) {
    next(err);
  }
};

const logoutUser = async (req, res, next) => {};

const getUserInfo = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (err) {
    next(err);
  }
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.logoutUser = logoutUser;
exports.getUserInfo = getUserInfo;
