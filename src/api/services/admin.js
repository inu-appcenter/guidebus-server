import bcrypt from "bcrypt";

import AdminModel from "../models/admin";

import CODE from "../../modules/statusCode";
import MSG from "../../modules/message";
import Response from "../../modules/response";

const adminService = {
  signin: async (uId, password) => {
    if (uId === undefined || password === undefined)
      return { code: CODE.NOT_FOUND, json: Response.fail(MSG.NOT_ENOUGH_VALUES) };
    else {
      const data = await AdminModel.findById(uId);
      if (data.length == 0) return { code: CODE.NOT_FOUND, json: Response.fail(MSG.INVALID_ID_PW) };
      else {
        if (await bcrypt.compareSync(password, data[0].password)) {
          return { success: true, uId: data[0].uId, password: data[0].password };
        } else return { code: CODE.NOT_FOUND, json: Response.fail(MSG.INVALID_ID_PW) };
      }
    }
  },

  signup: async (uId, password) => {
    if (uId === undefined || password === undefined)
      return { code: CODE.NOT_FOUND, json: Response.fail(MSG.NOT_ENOUGH_VALUES) };
    else {
      const idData = await AdminModel.findById(uId);
      if (idData.length !== 0)
        return { code: CODE.NOT_FOUND, json: Response.fail(MSG.EXISTING_ID) };
      else {
        const hashPassword = await bcrypt.hashSync(password, 10);
        await AdminModel.insertAll(uId, hashPassword);
        return { code: CODE.OK, json: Response.success(MSG.SIGN_UP) };
      }
    }
  },
};

export default adminService;
