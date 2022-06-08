const jwt = require("jsonwebtoken");
const { NotAuthorizedError } = require("../helpers/errors");

const userMiddlewar = (req, res, next) => {
  const [tokenType, token] = req.headers.authorization.split(" ");
  if (!token) {
    next(new NotAuthorizedError("Please, provide a token"));
  }

  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    next(new NotAuthorizedError("Invalid token"));
  }
};

module.exports = {
  userMiddlewar,
};
