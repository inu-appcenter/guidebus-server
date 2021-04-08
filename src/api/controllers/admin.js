import AdminService from "../services/admin";

import CODE from "../../modules/statusCode";
import Response from "../../modules/response";

export default {
  signin: async (req, res, next) => {
    const { uId, password } = req.body;

    try {
      const data = await AdminService.signin(uId, password);
      if (data) next();
      else return res.status(data.code).json(data.json);
    } catch (error) {
      return res.status(CODE.SERVER_ERROR).json(Response.fail(error.message));
    }
  },

  signup: async (req, res, next) => {
    const { uId, password } = req.body;
    try {
      const data = await AdminService.signup(uId, password);
      if (data !== undefined) return next();
      else return res.status(202).json({ success: false, msg: "signup 실패" });
    } catch (error) {
      return res.status(CODE.SERVER_ERROR).json(Response.fail(error.message));
    }
  },
};
