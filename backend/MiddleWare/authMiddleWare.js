const jwt = require("jsonwebtoken");
const JwtSecret = "maheshmerndeveloperinindore";
const requireSignIn = async (req, res, next) => {
  jwt.verify(
    req?.headers?.authorization,
    JwtSecret,
    (error, values) => {
      if (error) {
        return res.send({
          error: error.message,
          status: 400,
          success: false,
        });
      }
      req.user = values._id;
      next();
    }
  );
};

module.exports = requireSignIn;
