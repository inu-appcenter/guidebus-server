import AdminModel from "../models/admin";

const adminService = {
  loginByAdmin: async (uId) => {
    return await AdminModel.login(uId);
  },
};

export default adminService;
