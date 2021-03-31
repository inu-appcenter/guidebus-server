import AdminService from "../services/admin";

export default {
  login: async (req, res, next) => {
    const { uId } = req.body;
    try {
      const data = await AdminService.loginByAdmin(uId);
      req.admin = {
        uId: data[0].uId,
        password: data[0].password,
      };
      next();
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
};
