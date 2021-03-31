import jwt from "jsonwebtoken";
import config from "../../config";

export default {
  sign: async (req, res, next) => {
    try {
      req.token = jwt.sign({ admin: req.admin }, config.secret);
      next();
    } catch (error) {
      Error(error);
    }
  },

  verify: async (req, res, next) => {
    const token = req.headers.authorization.split("Bearer ")[1];
    jwt.verify(token, config.secret, (err, data) => {
      if (error) return Error(error);
      else {
        req.admin = data.admin;
        next();
      }
    });
  },
};
