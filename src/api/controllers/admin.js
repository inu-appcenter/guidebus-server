import AdminService from "../services/admin";
import logger from "../../loaders/logger";

export default {
  login: async (req, res, next) => {
    const { uId } = req.body;
    try {
      const data = AdminService.loginByAdmin(uId);
      console.log(data);
      req.admin = {
        uId: data[0].uId,
        password: data[0].password,
      };
      next();
    } catch (error) {
      next(error);
    }
  },
};
