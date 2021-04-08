import jwt from "jsonwebtoken";

import config from "../../config";
import CODE from "../../modules/statusCode";
import MSG from "../../modules/message";
import Response from "../../modules/response";

export default {
  sign: async (req, res) => {
    try {
      console.log("안녕?");
      req.token = jwt.sign({ admin: req.admin }, config.secret);
      return res.status(CODE.OK).json(Response.success(MSG.SIGN_IN, req.token));
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
