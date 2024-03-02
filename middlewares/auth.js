const jwt = require("jsonwebtoken");
const User = require("../models/user");

const isAuthentication = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(404).json({
      success: false,
      message: "Login First",
    });

  const decodeduser = await jwt.decode(token, process.env.JWT_SECRET);
  req.user = await User.findOne(decodeduser._id);
  next();
};

exports.isAuthentication = isAuthentication;
