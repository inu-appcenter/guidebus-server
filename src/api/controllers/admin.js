import AdminService from "../services/admin";

import CODE from "../../modules/statusCode";
import Response from "../../modules/response";

export default {
  signin: async (req, res, next) => {
    const { uId, password } = req.body;
    try {
      const data = await AdminService.signin(uId, password);
      if (!data.success) return res.status(data.code).json(data.json);
      else {
        req.admin = data;
        next();
      }
    } catch (error) {
      return res.status(CODE.SERVER_ERROR).json(Response.fail(error.message));
    }
  },

  signup: async (req, res) => {
    const { uId, password } = req.body;
    try {
      const { code, json } = await AdminService.signup(uId, password);
      return res.status(code).json(json);
    } catch (error) {
      return res.status(CODE.SERVER_ERROR).json(Response.fail(error.message));
    }
  },
};
