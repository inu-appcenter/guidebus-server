import bcrypt from "bcrypt";

import AdminModel from "../models/admin";

import CODE from "../../modules/statusCode";
import Response from "../../modules/response";

const adminService = {
  signin: async (uId, password) => {
    if (uId === undefined || password === undefined)
      return { code: CODE.NOT_FOUND, json: Response.fail("채우지 않은 값이 존재합니다.") };
    else {
      const [data] = await AdminModel.findById(uId);
      if (!data) return { code: CODE.NOT_FOUND, json: Response.fail("아이디가 다릅니다.") };
      else {
        if (await bcrypt.compareSync(password, data.password)) {
          req.admin = {
            uId: data[0].uId,
            password: data[0].password,
          };
          return true;
        } else return { code: CODE.NOT_FOUND, json: Response.fail("비밀번호가 다릅니다.") };
      }
    }
  },

  signup: async (uId, password) => {
    // const idData = await AdminModel.findById(uId);
    // if (idData.length != 0) return Error("Existed ID");
    const hashPassword = bcrypt.hashSync(password, 10);
    const data = await AdminModel.insertAll(uId, hashPassword);
    console.log(data);
    return data;
  },
};

export default adminService;
